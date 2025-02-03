import { cn } from "@/lib/utils";

export default function ExpandControl( {className}:{className?: string} ) {
    return (
        <svg
        className={cn("w-6 h-6", className)}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path d="M5.38803 19.923L5.72852 19.2548H5.72852L5.38803 19.923ZM4.07698 18.612L3.40873 18.9525H3.40873L4.07698 18.612ZM19.923 18.612L19.2548 18.2715V18.2715L19.923 18.612ZM18.612 19.923L18.2715 19.2548H18.2715L18.612 19.923ZM19.923 5.38803L19.2548 5.72852V5.72852L19.923 5.38803ZM18.612 4.07698L18.9525 3.40873V3.40873L18.612 4.07698ZM4.07698 5.38803L4.74524 5.72852L4.07698 5.38803ZM5.38803 4.07698L5.72852 4.74524L5.38803 4.07698ZM7 16.25C7 16.6642 7.33579 17 7.75 17C8.16421 17 8.5 16.6642 8.5 16.25H7ZM8.5 7.75C8.5 7.33579 8.16421 7 7.75 7C7.33579 7 7 7.33579 7 7.75H8.5ZM19.5 8.55V15.45H21V8.55H19.5ZM15.45 19.5H8.55V21H15.45V19.5ZM4.5 15.45V8.55H3V15.45H4.5ZM8.55 4.5H15.45V3H8.55V4.5ZM8.55 19.5C7.69755 19.5 7.10331 19.4994 6.64068 19.4616C6.1868 19.4245 5.92604 19.3554 5.72852 19.2548L5.04754 20.5913C5.49175 20.8176 5.97189 20.912 6.51853 20.9566C7.05641 21.0006 7.7223 21 8.55 21V19.5ZM3 15.45C3 16.2777 2.99942 16.9436 3.04336 17.4815C3.08803 18.0281 3.18238 18.5082 3.40873 18.9525L4.74524 18.2715C4.6446 18.074 4.57546 17.8132 4.53838 17.3593C4.50058 16.8967 4.5 16.3025 4.5 15.45H3ZM5.72852 19.2548C5.30516 19.039 4.96095 18.6948 4.74524 18.2715L3.40873 18.9525C3.76825 19.6581 4.34193 20.2317 5.04754 20.5913L5.72852 19.2548ZM19.5 15.45C19.5 16.3025 19.4994 16.8967 19.4616 17.3593C19.4245 17.8132 19.3554 18.074 19.2548 18.2715L20.5913 18.9525C20.8176 18.5082 20.912 18.0281 20.9566 17.4815C21.0006 16.9436 21 16.2777 21 15.45H19.5ZM15.45 21C16.2777 21 16.9436 21.0006 17.4815 20.9566C18.0281 20.912 18.5082 20.8176 18.9525 20.5913L18.2715 19.2548C18.074 19.3554 17.8132 19.4245 17.3593 19.4616C16.8967 19.4994 16.3025 19.5 15.45 19.5V21ZM19.2548 18.2715C19.0391 18.6948 18.6948 19.039 18.2715 19.2548L18.9525 20.5913C19.6581 20.2317 20.2318 19.6581 20.5913 18.9525L19.2548 18.2715ZM21 8.55C21 7.7223 21.0006 7.05641 20.9566 6.51853C20.912 5.97189 20.8176 5.49175 20.5913 5.04754L19.2548 5.72852C19.3554 5.92604 19.4245 6.1868 19.4616 6.64068C19.4994 7.10331 19.5 7.69755 19.5 8.55H21ZM15.45 4.5C16.3025 4.5 16.8967 4.50058 17.3593 4.53838C17.8132 4.57546 18.074 4.6446 18.2715 4.74524L18.9525 3.40873C18.5082 3.18238 18.0281 3.08803 17.4815 3.04336C16.9436 2.99942 16.2777 3 15.45 3V4.5ZM20.5913 5.04754C20.2318 4.34193 19.6581 3.76825 18.9525 3.40873L18.2715 4.74524C18.6948 4.96095 19.0391 5.30516 19.2548 5.72852L20.5913 5.04754ZM4.5 8.55C4.5 7.69755 4.50058 7.10331 4.53838 6.64068C4.57546 6.1868 4.6446 5.92604 4.74524 5.72852L3.40873 5.04754C3.18238 5.49175 3.08803 5.97189 3.04336 6.51853C2.99942 7.05641 3 7.7223 3 8.55H4.5ZM8.55 3C7.7223 3 7.05641 2.99942 6.51853 3.04336C5.97189 3.08803 5.49175 3.18238 5.04754 3.40873L5.72852 4.74524C5.92604 4.6446 6.1868 4.57546 6.64068 4.53838C7.10331 4.50058 7.69755 4.5 8.55 4.5V3ZM4.74524 5.72852C4.96095 5.30516 5.30516 4.96095 5.72852 4.74524L5.04754 3.40873C4.34193 3.76825 3.76825 4.34193 3.40873 5.04754L4.74524 5.72852ZM8.5 16.25V7.75H7V16.25H8.5Z" />
      </svg>
    );
  }
  