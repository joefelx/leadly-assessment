function Button({ name, className }: { name: string; className?: string }) {
  return (
    <button
      className={`bg-[#7DB434] text-white px-7 py-2 rounded-full uppercase hover:border hover:border-[#7DB434] hover:text-[#7DB434] hover:bg-white ${className}`}
    >
      {name}
    </button>
  );
}

export default Button;
