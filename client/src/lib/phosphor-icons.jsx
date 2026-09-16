// Auto-generated Phosphor Icons standalone bundle
import React, { createContext, useContext, forwardRef } from "react";

export const IconContext = createContext({
  color: "currentColor",
  size: "1em",
  weight: "regular",
  mirrored: false
});

const SVG_PATHS = {
  "AirplaneTilt": "<path d=\"M88,224l24-24V176l24-24,48,72,24-24-32-88,33-31A24,24,0,0,0,175,47L144,80,56,48,32,72l72,48L80,144H56L32,168l40,16Z\" fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"16\"/>",
  "ArrowRight": "<line x1=\"40\" y1=\"128\" x2=\"216\" y2=\"128\" fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"16\"/><polyline points=\"144 56 216 128 144 200\" fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"16\"/>",
  "PaperPlaneTilt": "<line x1=\"108\" y1=\"148\" x2=\"160\" y2=\"96\" fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"16\"/><path d=\"M223.69,42.18a8,8,0,0,0-9.87-9.87l-192,58.22a8,8,0,0,0-1.25,14.93L108,148l42.54,87.42a8,8,0,0,0,14.93-1.25Z\" fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"16\"/>",
  "Paperclip": "<path d=\"M160,80,76.69,164.69a16,16,0,0,0,22.63,22.62L198.63,86.63a32,32,0,0,0-45.26-45.26L54.06,142.06a48,48,0,0,0,67.88,67.88L204,128\" fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"16\"/>",
  "X": "<line x1=\"200\" y1=\"56\" x2=\"56\" y2=\"200\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"16\"/><line x1=\"200\" y1=\"200\" x2=\"56\" y2=\"56\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"16\"/>",
  "Image": "<rect x=\"32\" y=\"48\" width=\"192\" height=\"160\" rx=\"8\" fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"16\"/><circle cx=\"156\" cy=\"100\" r=\"12\"/><path d=\"M147.31,164,173,138.34a8,8,0,0,1,11.31,0L224,178.06\" fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"16\"/><path d=\"M32,168.69l54.34-54.35a8,8,0,0,1,11.32,0L191.31,208\" fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"16\"/>",
  "CaretUp": "<polyline points=\"48 160 128 80 208 160\" fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"16\"/>",
  "FileText": "<path d=\"M200,224H56a8,8,0,0,1-8-8V40a8,8,0,0,1,8-8h96l56,56V216A8,8,0,0,1,200,224Z\" fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"16\"/><polyline points=\"152 32 152 88 208 88\" fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"16\"/><line x1=\"96\" y1=\"136\" x2=\"160\" y2=\"136\" fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"16\"/><line x1=\"96\" y1=\"168\" x2=\"160\" y2=\"168\" fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"16\"/>",
  "ArrowClockwise": "<polyline points=\"184 104 232 104 232 56\" fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"16\"/><path d=\"M188.4,192a88,88,0,1,1,1.83-126.23L232,104\" fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"16\"/>",
  "CaretDown": "<polyline points=\"208 96 128 176 48 96\" fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"16\"/>",
  "ArrowLeft": "<line x1=\"216\" y1=\"128\" x2=\"40\" y2=\"128\" fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"16\"/><polyline points=\"112 56 40 128 112 200\" fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"16\"/>",
  "UserCircle": "<circle cx=\"128\" cy=\"128\" r=\"96\" fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"16\"/><circle cx=\"128\" cy=\"120\" r=\"40\" fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"16\"/><path d=\"M63.8,199.37a72,72,0,0,1,128.4,0\" fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"16\"/>",
  "PencilSimple": "<path d=\"M92.69,216H48a8,8,0,0,1-8-8V163.31a8,8,0,0,1,2.34-5.65L165.66,34.34a8,8,0,0,1,11.31,0L221.66,79a8,8,0,0,1,0,11.31L98.34,213.66A8,8,0,0,1,92.69,216Z\" fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"16\"/><line x1=\"136\" y1=\"64\" x2=\"192\" y2=\"120\" fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"16\"/>",
  "Question": "<circle cx=\"128\" cy=\"180\" r=\"12\"/><path d=\"M128,144v-8c17.67,0,32-12.54,32-28s-14.33-28-32-28S96,92.54,96,108v4\" fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"16\"/><circle cx=\"128\" cy=\"128\" r=\"96\" fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"16\"/>",
  "CaretRight": "<polyline points=\"96 48 176 128 96 208\" fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"16\"/>",
  "Ticket": "<line x1=\"96\" y1=\"56\" x2=\"96\" y2=\"200\" fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"16\"/><path d=\"M24,160a32,32,0,0,0,0-64V64a8,8,0,0,1,8-8H224a8,8,0,0,1,8,8V96a32,32,0,0,0,0,64v32a8,8,0,0,1-8,8H32a8,8,0,0,1-8-8Z\" fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"16\"/>",
  "Leaf": "<path d=\"M63.81,192.19c-47.89-79.81,16-159.62,151.64-151.64C223.43,176.23,143.62,240.08,63.81,192.19Z\" fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"16\"/><line x1=\"160\" y1=\"96\" x2=\"40\" y2=\"216\" fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"16\"/>",
  "QrCode": "<rect x=\"48\" y=\"48\" width=\"64\" height=\"64\" rx=\"8\" fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"16\"/><rect x=\"48\" y=\"144\" width=\"64\" height=\"64\" rx=\"8\" fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"16\"/><rect x=\"144\" y=\"48\" width=\"64\" height=\"64\" rx=\"8\" fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"16\"/><line x1=\"144\" y1=\"144\" x2=\"144\" y2=\"176\" fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"16\"/><polyline points=\"144 208 176 208 176 144\" fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"16\"/><line x1=\"176\" y1=\"160\" x2=\"208\" y2=\"160\" fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"16\"/><line x1=\"208\" y1=\"192\" x2=\"208\" y2=\"208\" fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"16\"/>",
  "SuitcaseRolling": "<line x1=\"88\" y1=\"216\" x2=\"88\" y2=\"240\" fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"16\"/><line x1=\"168\" y1=\"216\" x2=\"168\" y2=\"240\" fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"16\"/><line x1=\"96\" y1=\"88\" x2=\"96\" y2=\"184\" fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"16\"/><line x1=\"128\" y1=\"88\" x2=\"128\" y2=\"184\" fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"16\"/><line x1=\"160\" y1=\"88\" x2=\"160\" y2=\"184\" fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"16\"/><rect x=\"56\" y=\"56\" width=\"144\" height=\"160\" rx=\"8\" fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"16\"/><path d=\"M160,56V24A16,16,0,0,0,144,8H112A16,16,0,0,0,96,24V56\" fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"16\"/>",
  "Check": "<polyline points=\"40 144 96 200 224 72\" fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"16\"/>",
  "Users": "<circle cx=\"84\" cy=\"108\" r=\"52\" fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"16\"/><path d=\"M10.23,200a88,88,0,0,1,147.54,0\" fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"16\"/><path d=\"M172,160a87.93,87.93,0,0,1,73.77,40\" fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"16\"/><path d=\"M152.69,59.7A52,52,0,1,1,172,160\" fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"16\"/>",
  "Clock": "<circle cx=\"128\" cy=\"128\" r=\"96\" fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"16\"/><polyline points=\"128 72 128 128 184 128\" fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"16\"/>",
  "Info": "<circle cx=\"128\" cy=\"128\" r=\"96\" fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"16\"/><path d=\"M120,120a8,8,0,0,1,8,8v40a8,8,0,0,0,8,8\" fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"16\"/><circle cx=\"124\" cy=\"84\" r=\"12\"/>",
  "Phone": "<path d=\"M164.39,145.34a8,8,0,0,1,7.59-.69l47.16,21.13a8,8,0,0,1,4.8,8.3A48.33,48.33,0,0,1,176,216,136,136,0,0,1,40,80,48.33,48.33,0,0,1,81.92,32.06a8,8,0,0,1,8.3,4.8l21.13,47.2a8,8,0,0,1-.66,7.53L89.32,117a7.93,7.93,0,0,0-.54,7.81c8.27,16.93,25.77,34.22,42.75,42.41a7.92,7.92,0,0,0,7.83-.59Z\" fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"16\"/>",
  "AirplaneTakeoff": "<line x1=\"24\" y1=\"216\" x2=\"168\" y2=\"216\" fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"16\"/><path d=\"M88,116.51,58.65,88a8,8,0,0,1,2.2-13.3L68,72l57.53,21.17,54.84-32.75a32,32,0,0,1,41,7.32L240,91.64l-147.41,88a32,32,0,0,1-38-4.32L18.53,140a8,8,0,0,1,2.32-13.19L24,125.27,55.79,136Z\" fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"16\"/>",
  "AirplaneLanding": "<line x1=\"104\" y1=\"216\" x2=\"248\" y2=\"216\" fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"16\"/><path d=\"M60,75.46,104,88V48a8,8,0,0,1,10.53-7.59L120,42.24l24,57.2,64.56,18A32,32,0,0,1,232,148.32V184L55.37,134.54A32,32,0,0,1,32,103.73V48a8,8,0,0,1,10.53-7.59L48,42.24Z\" fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"16\"/>",
  "Buildings": "<path d=\"M136,216V32a8,8,0,0,0-12.44-6.65l-80,53.33A8,8,0,0,0,40,85.35V216\" fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"16\"/><path d=\"M136,88h72a8,8,0,0,1,8,8V216\" fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"16\"/><line x1=\"16\" y1=\"216\" x2=\"240\" y2=\"216\" fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"16\"/><line x1=\"104\" y1=\"112\" x2=\"104\" y2=\"128\" fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"16\"/><line x1=\"72\" y1=\"112\" x2=\"72\" y2=\"128\" fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"16\"/><line x1=\"72\" y1=\"168\" x2=\"72\" y2=\"184\" fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"16\"/><line x1=\"104\" y1=\"168\" x2=\"104\" y2=\"184\" fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"16\"/>",
  "User": "<circle cx=\"128\" cy=\"96\" r=\"64\" fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"16\"/><path d=\"M32,216c19.37-33.47,54.55-56,96-56s76.63,22.53,96,56\" fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"16\"/>",
  "Faders": "<line x1=\"128\" y1=\"120\" x2=\"128\" y2=\"216\" fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"16\"/><line x1=\"128\" y1=\"40\" x2=\"128\" y2=\"88\" fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"16\"/><line x1=\"200\" y1=\"200\" x2=\"200\" y2=\"216\" fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"16\"/><line x1=\"200\" y1=\"40\" x2=\"200\" y2=\"168\" fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"16\"/><line x1=\"224\" y1=\"168\" x2=\"176\" y2=\"168\" fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"16\"/><line x1=\"56\" y1=\"168\" x2=\"56\" y2=\"216\" fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"16\"/><line x1=\"56\" y1=\"40\" x2=\"56\" y2=\"136\" fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"16\"/><line x1=\"32\" y1=\"136\" x2=\"80\" y2=\"136\" fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"16\"/><line x1=\"152\" y1=\"88\" x2=\"104\" y2=\"88\" fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"16\"/>",
  "CalendarBlank": "<rect x=\"40\" y=\"40\" width=\"176\" height=\"176\" rx=\"8\" fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"16\"/><line x1=\"176\" y1=\"24\" x2=\"176\" y2=\"56\" fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"16\"/><line x1=\"80\" y1=\"24\" x2=\"80\" y2=\"56\" fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"16\"/><line x1=\"40\" y1=\"88\" x2=\"216\" y2=\"88\" fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"16\"/>",
  "EnvelopeSimple": "<path d=\"M32,56H224a0,0,0,0,1,0,0V192a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V56A0,0,0,0,1,32,56Z\" fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"16\"/><polyline points=\"224 56 128 144 32 56\" fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"16\"/>",
  "Armchair": "<line x1=\"80\" y1=\"136\" x2=\"176\" y2=\"136\" fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"16\"/><path d=\"M48,96V72A32,32,0,0,1,80,40h96a32,32,0,0,1,32,32V96\" fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"16\"/><path d=\"M80,168V128a32,32,0,1,0-32,32h0v40a8,8,0,0,0,8,8H200a8,8,0,0,0,8-8V160h0a32,32,0,1,0-32-32v40\" fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"16\"/>",
  "InstagramLogo": "<circle cx=\"128\" cy=\"128\" r=\"40\" fill=\"none\" stroke=\"currentColor\" stroke-miterlimit=\"10\" stroke-width=\"16\"/><rect x=\"32\" y=\"32\" width=\"192\" height=\"192\" rx=\"48\" fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"16\"/><circle cx=\"180\" cy=\"76\" r=\"12\"/>",
  "MapPin": "<circle cx=\"128\" cy=\"104\" r=\"32\" fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"16\"/><path d=\"M208,104c0,72-80,128-80,128S48,176,48,104a80,80,0,0,1,160,0Z\" fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"16\"/>",
  "YoutubeLogo": "<polygon points=\"160 128 112 96 112 160 160 128\" fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"16\"/><path d=\"M24,128c0,29.91,3.07,47.45,5.41,56.47A16,16,0,0,0,39,195.42C72.52,208.35,128,208,128,208s55.48.35,89-12.58a16,16,0,0,0,9.63-10.95c2.34-9,5.41-26.56,5.41-56.47s-3.07-47.45-5.41-56.47a16,16,0,0,0-9.63-11C183.48,47.65,128,48,128,48s-55.48-.35-89,12.58a16,16,0,0,0-9.63,11C27.07,80.54,24,98.09,24,128Z\" fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"16\"/>",
  "LinkedinLogo": "<rect x=\"32\" y=\"32\" width=\"192\" height=\"192\" rx=\"8\" fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"16\"/><line x1=\"120\" y1=\"112\" x2=\"120\" y2=\"176\" fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"16\"/><line x1=\"88\" y1=\"112\" x2=\"88\" y2=\"176\" fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"16\"/><path d=\"M120,140a28,28,0,0,1,56,0v36\" fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"16\"/><circle cx=\"88\" cy=\"84\" r=\"12\"/>",
  "BagSimple": "<rect x=\"32\" y=\"72\" width=\"192\" height=\"136\" rx=\"8\" fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"16\"/><path d=\"M88,72V64a40,40,0,0,1,80,0v8\" fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"16\"/>",
  "SignOut": "<polyline points=\"112 40 48 40 48 216 112 216\" fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"16\"/><line x1=\"112\" y1=\"128\" x2=\"224\" y2=\"128\" fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"16\"/><polyline points=\"184 88 224 128 184 168\" fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"16\"/>",
  "FacebookLogo": "<circle cx=\"128\" cy=\"128\" r=\"96\" fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"16\"/><path d=\"M168,88H152a24,24,0,0,0-24,24V224\" fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"16\"/><line x1=\"96\" y1=\"144\" x2=\"160\" y2=\"144\" fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"16\"/>",
  "Bell": "<path d=\"M96,192a32,32,0,0,0,64,0\" fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"16\"/><path d=\"M56,104a72,72,0,0,1,144,0c0,35.82,8.3,64.6,14.9,76A8,8,0,0,1,208,192H48a8,8,0,0,1-6.88-12C47.71,168.6,56,139.81,56,104Z\" fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"16\"/>",
  "CreditCard": "<rect x=\"24\" y=\"56\" width=\"208\" height=\"144\" rx=\"8\" fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"16\"/><line x1=\"168\" y1=\"168\" x2=\"200\" y2=\"168\" fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"16\"/><line x1=\"120\" y1=\"168\" x2=\"136\" y2=\"168\" fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"16\"/><line x1=\"24\" y1=\"96\" x2=\"232\" y2=\"96\" fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"16\"/>",
  "WarningCircle": "<circle cx=\"128\" cy=\"128\" r=\"96\" fill=\"none\" stroke=\"currentColor\" stroke-miterlimit=\"10\" stroke-width=\"16\"/><line x1=\"128\" y1=\"136\" x2=\"128\" y2=\"80\" fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"16\"/><circle cx=\"128\" cy=\"172\" r=\"12\"/>",
  "Shield": "<path d=\"M216,112V56a8,8,0,0,0-8-8H48a8,8,0,0,0-8,8v56c0,96,88,120,88,120S216,208,216,112Z\" fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"16\"/>",
  "CheckCircle": "<polyline points=\"88 136 112 160 168 104\" fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"16\"/><circle cx=\"128\" cy=\"128\" r=\"96\" fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"16\"/>",
  "Star": "<path d=\"M128,189.09l54.72,33.65a8.4,8.4,0,0,0,12.52-9.17l-14.88-62.79,48.7-42A8.46,8.46,0,0,0,224.27,94L160.36,88.8,135.74,29.2a8.36,8.36,0,0,0-15.48,0L95.64,88.8,31.73,94a8.46,8.46,0,0,0-4.79,14.83l48.7,42L60.76,213.57a8.4,8.4,0,0,0,12.52,9.17Z\" fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"16\"/>",
  "Headset": "<path d=\"M224,200v8a32,32,0,0,1-32,32H136\" fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"16\"/><path d=\"M224,128H192a16,16,0,0,0-16,16v40a16,16,0,0,0,16,16h32V128a96,96,0,1,0-192,0v56a16,16,0,0,0,16,16H64a16,16,0,0,0,16-16V144a16,16,0,0,0-16-16H32\" fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"16\"/>",
  "Globe": "<circle cx=\"128\" cy=\"128\" r=\"96\" fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"16\"/><path d=\"M168,128c0,64-40,96-40,96s-40-32-40-96,40-96,40-96S168,64,168,128Z\" fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"16\"/><line x1=\"37.46\" y1=\"96\" x2=\"218.54\" y2=\"96\" fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"16\"/><line x1=\"37.46\" y1=\"160\" x2=\"218.54\" y2=\"160\" fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"16\"/>",
  "Car": "<line x1=\"16\" y1=\"112\" x2=\"240\" y2=\"112\" fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"16\"/><path d=\"M224,176v24a8,8,0,0,1-8,8H192a8,8,0,0,1-8-8V176\" fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"16\"/><path d=\"M72,176v24a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V176\" fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"16\"/><line x1=\"64\" y1=\"144\" x2=\"80\" y2=\"144\" fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"16\"/><line x1=\"176\" y1=\"144\" x2=\"192\" y2=\"144\" fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"16\"/><path d=\"M224,112,194.11,44.75A8,8,0,0,0,186.8,40H69.2a8,8,0,0,0-7.31,4.75L32,112v64H224Z\" fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"16\"/>",
  "Gift": "<rect x=\"32\" y=\"80\" width=\"192\" height=\"48\" rx=\"8\" fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"16\"/><path d=\"M208,128v72a8,8,0,0,1-8,8H56a8,8,0,0,1-8-8V128\" fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"16\"/><line x1=\"128\" y1=\"80\" x2=\"128\" y2=\"208\" fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"16\"/><path d=\"M176.79,31.21c9.34,9.34,9.89,25.06,0,33.82C159.88,80,128,80,128,80s0-31.88,15-48.79C151.73,21.32,167.45,21.87,176.79,31.21Z\" fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"16\"/><path d=\"M79.21,31.21c-9.34,9.34-9.89,25.06,0,33.82C96.12,80,128,80,128,80s0-31.88-15-48.79C104.27,21.32,88.55,21.87,79.21,31.21Z\" fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"16\"/>",
  "Coffee": "<line x1=\"88\" y1=\"24\" x2=\"88\" y2=\"56\" fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"16\"/><line x1=\"120\" y1=\"24\" x2=\"120\" y2=\"56\" fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"16\"/><line x1=\"152\" y1=\"24\" x2=\"152\" y2=\"56\" fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"16\"/><line x1=\"32\" y1=\"216\" x2=\"208\" y2=\"216\" fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"16\"/><path d=\"M83.3,216A88,88,0,0,1,32,136V88H208v48a88,88,0,0,1-51.3,80\" fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"16\"/><path d=\"M208,88h0a32,32,0,0,1,32,32v8a32,32,0,0,1-32,32h-3.38\" fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"16\"/>",
  "Printer": "<polyline points=\"64 80 64 40 192 40 192 80\" fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"16\"/><rect x=\"64\" y=\"152\" width=\"128\" height=\"64\" fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"16\"/><path d=\"M64,176H24V96c0-8.84,7.76-16,17.33-16H214.67C224.24,80,232,87.16,232,96v80H192\" fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"16\"/><circle cx=\"188\" cy=\"116\" r=\"12\"/>",
  "ArrowUpRight": "<line x1=\"64\" y1=\"192\" x2=\"192\" y2=\"64\" fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"16\"/><polyline points=\"88 64 192 64 192 168\" fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"16\"/>",
  "ShieldCheck": "<path d=\"M216,112V56a8,8,0,0,0-8-8H48a8,8,0,0,0-8,8v56c0,96,88,120,88,120S216,208,216,112Z\" fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"16\"/><polyline points=\"88 136 112 160 168 104\" fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"16\"/>",
  "MagnifyingGlass": "<circle cx=\"112\" cy=\"112\" r=\"80\" fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"16\"/><line x1=\"168.57\" y1=\"168.57\" x2=\"224\" y2=\"224\" fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"16\"/>",
  "PlusCircle": "<circle cx=\"128\" cy=\"128\" r=\"96\" fill=\"none\" stroke=\"currentColor\" stroke-miterlimit=\"10\" stroke-width=\"16\"/><line x1=\"88\" y1=\"128\" x2=\"168\" y2=\"128\" fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"16\"/><line x1=\"128\" y1=\"88\" x2=\"128\" y2=\"168\" fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"16\"/>",
  "CircleNotch": "<path d=\"M168,40a97,97,0,0,1,56,88,96,96,0,0,1-192,0A97,97,0,0,1,88,40\" fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"16\"/>",
  "ArrowsLeftRight": "<polyline points=\"176 144 208 176 176 208\" fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"16\"/><line x1=\"48\" y1=\"176\" x2=\"208\" y2=\"176\" fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"16\"/><polyline points=\"80 112 48 80 80 48\" fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"16\"/><line x1=\"208\" y1=\"80\" x2=\"48\" y2=\"80\" fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"16\"/>",
  "MapPinLine": "<line x1=\"56\" y1=\"232\" x2=\"200\" y2=\"232\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"16\"/><circle cx=\"128\" cy=\"104\" r=\"32\" fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"16\"/><path d=\"M208,104c0,72-80,128-80,128S48,176,48,104a80,80,0,0,1,160,0Z\" fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"16\"/>",
  "Lock": "<rect x=\"40\" y=\"88\" width=\"176\" height=\"128\" rx=\"8\" fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"16\"/><circle cx=\"128\" cy=\"152\" r=\"12\"/><path d=\"M88,88V56a40,40,0,0,1,80,0V88\" fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"16\"/>",
  "Funnel": "<path d=\"M34.1,61.38A8,8,0,0,1,40,48H216a8,8,0,0,1,5.92,13.38L152,136v58.65a8,8,0,0,1-3.56,6.66l-32,21.33A8,8,0,0,1,104,216V136Z\" fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"16\"/>",
  "CurrencyCircleDollar": "<line x1=\"128\" y1=\"72\" x2=\"128\" y2=\"88\" fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"16\"/><line x1=\"128\" y1=\"168\" x2=\"128\" y2=\"184\" fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"16\"/><circle cx=\"128\" cy=\"128\" r=\"96\" fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"16\"/><path d=\"M104,168h36a20,20,0,0,0,0-40H116a20,20,0,0,1,0-40h36\" fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"16\"/>",
  "CaretLeft": "<polyline points=\"160 208 80 128 160 48\" fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"16\"/>",
  "Briefcase": "<rect x=\"32\" y=\"64\" width=\"192\" height=\"144\" rx=\"8\" fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"16\"/><path d=\"M168,64V48a16,16,0,0,0-16-16H104A16,16,0,0,0,88,48V64\" fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"16\"/><path d=\"M224,118.31A191.09,191.09,0,0,1,128,144a191.14,191.14,0,0,1-96-25.68\" fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"16\"/><line x1=\"112\" y1=\"112\" x2=\"144\" y2=\"112\" fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"16\"/>",
  "LockKey": "<circle cx=\"128\" cy=\"140\" r=\"20\" fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"16\"/><line x1=\"128\" y1=\"160\" x2=\"128\" y2=\"184\" fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"16\"/><rect x=\"40\" y=\"88\" width=\"176\" height=\"128\" rx=\"8\" fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"16\"/><path d=\"M88,88V56a40,40,0,0,1,80,0V88\" fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"16\"/>",
  "Trophy": "<line x1=\"96\" y1=\"224\" x2=\"160\" y2=\"224\" fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"16\"/><line x1=\"128\" y1=\"184\" x2=\"128\" y2=\"224\" fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"16\"/><path d=\"M58,128H48A32,32,0,0,1,16,96V80a8,8,0,0,1,8-8H56\" fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"16\"/><path d=\"M198,128h10a32,32,0,0,0,32-32V80a8,8,0,0,0-8-8H200\" fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"16\"/><path d=\"M56,48H200v63.1c0,39.7-31.75,72.6-71.45,72.9A72,72,0,0,1,56,112Z\" fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"16\"/>",
  "Eye": "<path d=\"M128,56C48,56,16,128,16,128s32,72,112,72,112-72,112-72S208,56,128,56Z\" fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"16\"/><circle cx=\"128\" cy=\"128\" r=\"40\" fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"16\"/>",
  "Copy": "<polyline points=\"168 168 216 168 216 40 88 40 88 88\" fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"16\"/><rect x=\"40\" y=\"88\" width=\"128\" height=\"128\" fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"16\"/>",
  "Hash": "<line x1=\"48\" y1=\"96\" x2=\"224\" y2=\"96\" fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"16\"/><line x1=\"176\" y1=\"40\" x2=\"144\" y2=\"216\" fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"16\"/><line x1=\"112\" y1=\"40\" x2=\"80\" y2=\"216\" fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"16\"/><line x1=\"32\" y1=\"160\" x2=\"208\" y2=\"160\" fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"16\"/>",
  "PhoneCall": "<path d=\"M152,48a78.61,78.61,0,0,1,56,56\" fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"16\"/><path d=\"M144,80c16.52,4.42,27.58,15.48,32,32\" fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"16\"/><path d=\"M156.39,153.34a8,8,0,0,1,7.59-.69l47.16,21.13a8,8,0,0,1,4.8,8.3A48.33,48.33,0,0,1,168,224,136,136,0,0,1,32,88,48.33,48.33,0,0,1,73.92,40.06a8,8,0,0,1,8.3,4.8l21.13,47.2a8,8,0,0,1-.66,7.53L81.32,125a7.93,7.93,0,0,0-.54,7.81c8.27,16.93,25.77,34.22,42.75,42.41a7.92,7.92,0,0,0,7.83-.59Z\" fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"16\"/>",
  "EyeSlash": "<line x1=\"48\" y1=\"40\" x2=\"208\" y2=\"216\" fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"16\"/><path d=\"M154.91,157.6a40,40,0,0,1-53.82-59.2\" fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"16\"/><path d=\"M135.53,88.71a40,40,0,0,1,32.3,35.53\" fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"16\"/><path d=\"M208.61,169.1C230.41,149.58,240,128,240,128S208,56,128,56a126,126,0,0,0-20.68,1.68\" fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"16\"/><path d=\"M74,68.6C33.23,89.24,16,128,16,128s32,72,112,72a118.05,118.05,0,0,0,54-12.6\" fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"16\"/>",
  "Lightning": "<polygon points=\"160 16 144 96 208 120 96 240 112 160 48 136 160 16\" fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"16\"/>",
  "Crown": "<circle cx=\"128\" cy=\"52\" r=\"20\" fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"16\"/><circle cx=\"220\" cy=\"80\" r=\"20\" fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"16\"/><circle cx=\"36\" cy=\"80\" r=\"20\" fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"16\"/><polyline points=\"120.02 70.35 88 144 48.61 95.52\" fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"16\"/><polyline points=\"207.39 95.52 168 144 135.98 70.35\" fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"16\"/><path d=\"M39.29,99.73l15.6,93.59A8,8,0,0,0,62.78,200H193.22a8,8,0,0,0,7.89-6.68l15.6-93.59\" fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"16\"/>",
  "AirplaneInFlight": "<line x1=\"72\" y1=\"216\" x2=\"216\" y2=\"216\" fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"16\"/><path d=\"M144,104h64a32,32,0,0,1,32,32v24H61.06a32,32,0,0,1-30.65-22.8L16.34,90.3A8,8,0,0,1,24,80h8l24,24H92.91L80.42,66.53A8,8,0,0,1,88,56h8Z\" fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"16\"/>",
  "ForkKnife": "<line x1=\"80\" y1=\"40\" x2=\"80\" y2=\"88\" fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"16\"/><line x1=\"80\" y1=\"128\" x2=\"80\" y2=\"224\" fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"16\"/><path d=\"M208,168H152s0-104,56-128V224\" fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"16\"/><path d=\"M48,40,40,88a40,40,0,0,0,80,0l-8-48\" fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"16\"/>",
  "BookOpen": "<path d=\"M128,88a32,32,0,0,1,32-32h72V200H160a32,32,0,0,0-32,32\" fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"16\"/><path d=\"M24,200H96a32,32,0,0,1,32,32V88A32,32,0,0,0,96,56H24Z\" fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"16\"/>",
  "Sparkle": "<path d=\"M84.27,171.73l-55.09-20.3a7.92,7.92,0,0,1,0-14.86l55.09-20.3,20.3-55.09a7.92,7.92,0,0,1,14.86,0l20.3,55.09,55.09,20.3a7.92,7.92,0,0,1,0,14.86l-55.09,20.3-20.3,55.09a7.92,7.92,0,0,1-14.86,0Z\" fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"16\"/><line x1=\"176\" y1=\"16\" x2=\"176\" y2=\"64\" fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"16\"/><line x1=\"224\" y1=\"72\" x2=\"224\" y2=\"104\" fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"16\"/><line x1=\"152\" y1=\"40\" x2=\"200\" y2=\"40\" fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"16\"/><line x1=\"208\" y1=\"88\" x2=\"240\" y2=\"88\" fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"16\"/>",
  "Percent": "<line x1=\"200\" y1=\"56\" x2=\"56\" y2=\"200\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"16\"/><circle cx=\"76\" cy=\"76\" r=\"28\" fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"16\"/><circle cx=\"180\" cy=\"180\" r=\"28\" fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"16\"/>",
  "EnvelopeSimpleOpen": "<path d=\"M32,96V200a8,8,0,0,0,8,8H216a8,8,0,0,0,8-8V96L128,32Z\" fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"16\"/><polyline points=\"224 96 145.46 152 110.55 152 32 96\" fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"16\"/>",
  "PaperPlaneRight": "<line x1=\"144\" y1=\"128\" x2=\"80\" y2=\"128\" fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"16\"/><path d=\"M48.49,221.28A8,8,0,0,0,59.93,231l168-96.09a8,8,0,0,0,0-14l-168-95.85a8,8,0,0,0-11.44,9.67L80,128Z\" fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"16\"/>"
};

function createIcon(name) {
  const IconComponent = forwardRef(function Icon(props, ref) {
    const context = useContext(IconContext);
    const {
      color = context.color || "currentColor",
      size = context.size || "1em",
      mirrored = context.mirrored || false,
      alt,
      className,
      style,
      children,
      weight,
      ...rest
    } = props;

    const innerHtml = SVG_PATHS[name] || '<circle cx="128" cy="128" r="96" fill="none" stroke="currentColor" stroke-width="16"/>';

    return React.createElement("svg", {
      ref,
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 256 256",
      width: size,
      height: size,
      fill: color,
      className,
      style: {
        ...style,
        ...(mirrored ? { transform: "scale(-1, 1)" } : {})
      },
      dangerouslySetInnerHTML: { __html: innerHtml },
      ...rest
    });
  });

  IconComponent.displayName = name;
  return IconComponent;
}

export const AirplaneTilt = createIcon("AirplaneTilt");
export const AirplaneTiltIcon = AirplaneTilt;
export const PaperPlaneTilt = createIcon("PaperPlaneTilt");
export const PaperPlaneTiltIcon = PaperPlaneTilt;
export const Image = createIcon("Image");
export const ImageIcon = Image;
export const X = createIcon("X");
export const XIcon = X;
export const FileText = createIcon("FileText");
export const FileTextIcon = FileText;
export const Paperclip = createIcon("Paperclip");
export const PaperclipIcon = Paperclip;
export const ArrowClockwise = createIcon("ArrowClockwise");
export const ArrowClockwiseIcon = ArrowClockwise;
export const ArrowRight = createIcon("ArrowRight");
export const ArrowRightIcon = ArrowRight;
export const CaretDown = createIcon("CaretDown");
export const CaretDownIcon = CaretDown;
export const CaretUp = createIcon("CaretUp");
export const CaretUpIcon = CaretUp;
export const Leaf = createIcon("Leaf");
export const LeafIcon = Leaf;
export const UserCircle = createIcon("UserCircle");
export const UserCircleIcon = UserCircle;
export const PencilSimple = createIcon("PencilSimple");
export const PencilSimpleIcon = PencilSimple;
export const Check = createIcon("Check");
export const CheckIcon = Check;
export const SuitcaseRolling = createIcon("SuitcaseRolling");
export const SuitcaseRollingIcon = SuitcaseRolling;
export const Ticket = createIcon("Ticket");
export const TicketIcon = Ticket;
export const CaretRight = createIcon("CaretRight");
export const CaretRightIcon = CaretRight;
export const Question = createIcon("Question");
export const QuestionIcon = Question;
export const ArrowLeft = createIcon("ArrowLeft");
export const ArrowLeftIcon = ArrowLeft;
export const QrCode = createIcon("QrCode");
export const QrCodeIcon = QrCode;
export const User = createIcon("User");
export const UserIcon = User;
export const Clock = createIcon("Clock");
export const ClockIcon = Clock;
export const Users = createIcon("Users");
export const UsersIcon = Users;
export const Info = createIcon("Info");
export const InfoIcon = Info;
export const Buildings = createIcon("Buildings");
export const BuildingsIcon = Buildings;
export const CalendarBlank = createIcon("CalendarBlank");
export const CalendarBlankIcon = CalendarBlank;
export const AirplaneLanding = createIcon("AirplaneLanding");
export const AirplaneLandingIcon = AirplaneLanding;
export const AirplaneTakeoff = createIcon("AirplaneTakeoff");
export const AirplaneTakeoffIcon = AirplaneTakeoff;
export const Faders = createIcon("Faders");
export const FadersIcon = Faders;
export const Phone = createIcon("Phone");
export const PhoneIcon = Phone;
export const EnvelopeSimple = createIcon("EnvelopeSimple");
export const EnvelopeSimpleIcon = EnvelopeSimple;
export const MapPin = createIcon("MapPin");
export const MapPinIcon = MapPin;
export const FacebookLogo = createIcon("FacebookLogo");
export const FacebookLogoIcon = FacebookLogo;
export const InstagramLogo = createIcon("InstagramLogo");
export const InstagramLogoIcon = InstagramLogo;
export const LinkedinLogo = createIcon("LinkedinLogo");
export const LinkedinLogoIcon = LinkedinLogo;
export const YoutubeLogo = createIcon("YoutubeLogo");
export const YoutubeLogoIcon = YoutubeLogo;
export const SignOut = createIcon("SignOut");
export const SignOutIcon = SignOut;
export const Bell = createIcon("Bell");
export const BellIcon = Bell;
export const Armchair = createIcon("Armchair");
export const ArmchairIcon = Armchair;
export const BagSimple = createIcon("BagSimple");
export const BagSimpleIcon = BagSimple;
export const Coffee = createIcon("Coffee");
export const CoffeeIcon = Coffee;
export const Car = createIcon("Car");
export const CarIcon = Car;
export const Star = createIcon("Star");
export const StarIcon = Star;
export const Shield = createIcon("Shield");
export const ShieldIcon = Shield;
export const Gift = createIcon("Gift");
export const GiftIcon = Gift;
export const CreditCard = createIcon("CreditCard");
export const CreditCardIcon = CreditCard;
export const Globe = createIcon("Globe");
export const GlobeIcon = Globe;
export const Headset = createIcon("Headset");
export const HeadsetIcon = Headset;
export const CheckCircle = createIcon("CheckCircle");
export const CheckCircleIcon = CheckCircle;
export const WarningCircle = createIcon("WarningCircle");
export const WarningCircleIcon = WarningCircle;
export const CircleNotch = createIcon("CircleNotch");
export const CircleNotchIcon = CircleNotch;
export const ShieldCheck = createIcon("ShieldCheck");
export const ShieldCheckIcon = ShieldCheck;
export const ArrowUpRight = createIcon("ArrowUpRight");
export const ArrowUpRightIcon = ArrowUpRight;
export const Printer = createIcon("Printer");
export const PrinterIcon = Printer;
export const PlusCircle = createIcon("PlusCircle");
export const PlusCircleIcon = PlusCircle;
export const Lock = createIcon("Lock");
export const LockIcon = Lock;
export const MapPinLine = createIcon("MapPinLine");
export const MapPinLineIcon = MapPinLine;
export const ArrowsLeftRight = createIcon("ArrowsLeftRight");
export const ArrowsLeftRightIcon = ArrowsLeftRight;
export const MagnifyingGlass = createIcon("MagnifyingGlass");
export const MagnifyingGlassIcon = MagnifyingGlass;
export const Funnel = createIcon("Funnel");
export const FunnelIcon = Funnel;
export const CaretLeft = createIcon("CaretLeft");
export const CaretLeftIcon = CaretLeft;
export const CurrencyCircleDollar = createIcon("CurrencyCircleDollar");
export const CurrencyCircleDollarIcon = CurrencyCircleDollar;
export const Hash = createIcon("Hash");
export const HashIcon = Hash;
export const LockKey = createIcon("LockKey");
export const LockKeyIcon = LockKey;
export const Eye = createIcon("Eye");
export const EyeIcon = Eye;
export const EyeSlash = createIcon("EyeSlash");
export const EyeSlashIcon = EyeSlash;
export const Copy = createIcon("Copy");
export const CopyIcon = Copy;
export const Trophy = createIcon("Trophy");
export const TrophyIcon = Trophy;
export const PhoneCall = createIcon("PhoneCall");
export const PhoneCallIcon = PhoneCall;
export const Briefcase = createIcon("Briefcase");
export const BriefcaseIcon = Briefcase;
export const PaperPlaneRight = createIcon("PaperPlaneRight");
export const PaperPlaneRightIcon = PaperPlaneRight;
export const BookOpen = createIcon("BookOpen");
export const BookOpenIcon = BookOpen;
export const ForkKnife = createIcon("ForkKnife");
export const ForkKnifeIcon = ForkKnife;
export const Lightning = createIcon("Lightning");
export const LightningIcon = Lightning;
export const Crown = createIcon("Crown");
export const CrownIcon = Crown;
export const AirplaneInFlight = createIcon("AirplaneInFlight");
export const AirplaneInFlightIcon = AirplaneInFlight;
export const Percent = createIcon("Percent");
export const PercentIcon = Percent;
export const EnvelopeSimpleOpen = createIcon("EnvelopeSimpleOpen");
export const EnvelopeSimpleOpenIcon = EnvelopeSimpleOpen;
export const Sparkle = createIcon("Sparkle");
export const SparkleIcon = Sparkle;

const iconHandler = {
  get(target, prop) {
    if (prop in target) return target[prop];
    if (typeof prop === 'string' && prop !== '__esModule' && prop !== 'default') {
      return createIcon(prop);
    }
    return undefined;
  }
};

const exported = {
  IconContext,
  AirplaneTilt,
  AirplaneTiltIcon: AirplaneTilt,
  PaperPlaneTilt,
  PaperPlaneTiltIcon: PaperPlaneTilt,
  Image,
  ImageIcon: Image,
  X,
  XIcon: X,
  FileText,
  FileTextIcon: FileText,
  Paperclip,
  PaperclipIcon: Paperclip,
  ArrowClockwise,
  ArrowClockwiseIcon: ArrowClockwise,
  ArrowRight,
  ArrowRightIcon: ArrowRight,
  CaretDown,
  CaretDownIcon: CaretDown,
  CaretUp,
  CaretUpIcon: CaretUp,
  Leaf,
  LeafIcon: Leaf,
  UserCircle,
  UserCircleIcon: UserCircle,
  PencilSimple,
  PencilSimpleIcon: PencilSimple,
  Check,
  CheckIcon: Check,
  SuitcaseRolling,
  SuitcaseRollingIcon: SuitcaseRolling,
  Ticket,
  TicketIcon: Ticket,
  CaretRight,
  CaretRightIcon: CaretRight,
  Question,
  QuestionIcon: Question,
  ArrowLeft,
  ArrowLeftIcon: ArrowLeft,
  QrCode,
  QrCodeIcon: QrCode,
  User,
  UserIcon: User,
  Clock,
  ClockIcon: Clock,
  Users,
  UsersIcon: Users,
  Info,
  InfoIcon: Info,
  Buildings,
  BuildingsIcon: Buildings,
  CalendarBlank,
  CalendarBlankIcon: CalendarBlank,
  AirplaneLanding,
  AirplaneLandingIcon: AirplaneLanding,
  AirplaneTakeoff,
  AirplaneTakeoffIcon: AirplaneTakeoff,
  Faders,
  FadersIcon: Faders,
  Phone,
  PhoneIcon: Phone,
  EnvelopeSimple,
  EnvelopeSimpleIcon: EnvelopeSimple,
  MapPin,
  MapPinIcon: MapPin,
  FacebookLogo,
  FacebookLogoIcon: FacebookLogo,
  InstagramLogo,
  InstagramLogoIcon: InstagramLogo,
  LinkedinLogo,
  LinkedinLogoIcon: LinkedinLogo,
  YoutubeLogo,
  YoutubeLogoIcon: YoutubeLogo,
  SignOut,
  SignOutIcon: SignOut,
  Bell,
  BellIcon: Bell,
  Armchair,
  ArmchairIcon: Armchair,
  BagSimple,
  BagSimpleIcon: BagSimple,
  Coffee,
  CoffeeIcon: Coffee,
  Car,
  CarIcon: Car,
  Star,
  StarIcon: Star,
  Shield,
  ShieldIcon: Shield,
  Gift,
  GiftIcon: Gift,
  CreditCard,
  CreditCardIcon: CreditCard,
  Globe,
  GlobeIcon: Globe,
  Headset,
  HeadsetIcon: Headset,
  CheckCircle,
  CheckCircleIcon: CheckCircle,
  WarningCircle,
  WarningCircleIcon: WarningCircle,
  CircleNotch,
  CircleNotchIcon: CircleNotch,
  ShieldCheck,
  ShieldCheckIcon: ShieldCheck,
  ArrowUpRight,
  ArrowUpRightIcon: ArrowUpRight,
  Printer,
  PrinterIcon: Printer,
  PlusCircle,
  PlusCircleIcon: PlusCircle,
  Lock,
  LockIcon: Lock,
  MapPinLine,
  MapPinLineIcon: MapPinLine,
  ArrowsLeftRight,
  ArrowsLeftRightIcon: ArrowsLeftRight,
  MagnifyingGlass,
  MagnifyingGlassIcon: MagnifyingGlass,
  Funnel,
  FunnelIcon: Funnel,
  CaretLeft,
  CaretLeftIcon: CaretLeft,
  CurrencyCircleDollar,
  CurrencyCircleDollarIcon: CurrencyCircleDollar,
  Hash,
  HashIcon: Hash,
  LockKey,
  LockKeyIcon: LockKey,
  Eye,
  EyeIcon: Eye,
  EyeSlash,
  EyeSlashIcon: EyeSlash,
  Copy,
  CopyIcon: Copy,
  Trophy,
  TrophyIcon: Trophy,
  PhoneCall,
  PhoneCallIcon: PhoneCall,
  Briefcase,
  BriefcaseIcon: Briefcase,
  PaperPlaneRight,
  PaperPlaneRightIcon: PaperPlaneRight,
  BookOpen,
  BookOpenIcon: BookOpen,
  ForkKnife,
  ForkKnifeIcon: ForkKnife,
  Lightning,
  LightningIcon: Lightning,
  Crown,
  CrownIcon: Crown,
  AirplaneInFlight,
  AirplaneInFlightIcon: AirplaneInFlight,
  Percent,
  PercentIcon: Percent,
  EnvelopeSimpleOpen,
  EnvelopeSimpleOpenIcon: EnvelopeSimpleOpen,
  Sparkle,
  SparkleIcon: Sparkle
};

export default new Proxy(exported, iconHandler);
