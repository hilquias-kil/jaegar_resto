export function Paypal({ color = "#FFFFFF" }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none">
      <path
        stroke={color}
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="1.5"
        d="M17.5 7.2C19.2 8.2 20 10 20 12c0 2.5-2.5 4.5-5 4.5h-2.6l-.6 3.6a1 1 0 0 1-1 .8H8.1a.5.5 0 0 1-.5-.6l.2-1.4M10 13h2.5c2.5 0 5-2.5 5-5 0-3-1.9-5-5-5H7c-.5 0-1 .5-1 1L4 18c0 .5.5 1 1 1h2.8L9 14c.1-.6.4-1 1-1Z"
      />
    </svg>
  );
}
