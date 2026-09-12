import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../../store/useAuthStore";

export default function GoogleOneTap() {
  const navigate = useNavigate();
  const user = useAuthStore((state) => state.user);

  useEffect(() => {
    // Nếu đã đăng nhập thì không hiện One Tap
    if (user) return;

    const clientId =
      import.meta.env.VITE_GOOGLE_CLIENT_ID ||
      ""; // Lấy từ env

    if (!clientId) return;

    // Load Google Identity Services script
    const loadGsiScript = () => {
      if (document.getElementById("google-gsi-script")) {
        initOneTap();
        return;
      }

      const script = document.createElement("script");
      script.id = "google-gsi-script";
      script.src = "https://accounts.google.com/gsi/client";
      script.async = true;
      script.defer = true;
      script.onload = () => {
        initOneTap();
      };
      document.body.appendChild(script);
    };

    const initOneTap = () => {
      if (!window.google?.accounts?.id) return;

      window.google.accounts.id.initialize({
        client_id: clientId,
        callback: handleGoogleOneTapResponse,
        auto_select: false,
        cancel_on_tap_outside: true,
      });

      // Hiển thị One Tap prompt ở góc trên bên phải
      window.google.accounts.id.prompt((notification) => {
        if (notification.isNotDisplayed()) {
          // One tap không hiển thị (do cookie hoặc người dùng đã tắt)
        }
      });
    };

    const handleGoogleOneTapResponse = async (response) => {
      if (!response.credential) return;

      try {
        const res = await fetch("/api/auth/google/one-tap", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          credentials: "include",
          body: JSON.stringify({
            credential: response.credential,
          }),
        });

        const data = await res.json();

        if (data.status === "success" && data.access_token) {
          useAuthStore.getState().setAuth({ user: data.user, token: data.access_token });

          const isAdmin =
            data.user.role === 1 ||
            data.user.role === "1" ||
            data.user.roles?.some((r) => r.name === "admin");

          if (isAdmin) {
            navigate("/admin");
          } else {
            // Đồng bộ nhẹ app
            window.location.reload();
          }
        }
      } catch (err) {
        console.error("Google One Tap Error:", err);
      }
    };

    loadGsiScript();
  }, [navigate, user]);

  return null; // Component chạy ngầm, không render thẻ DOM cố định
}
