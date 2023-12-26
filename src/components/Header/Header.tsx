export const Header = () => (
  <header className="flex justify-between items-center">
    <div>
      <h1 className="text-[28px] font-semibold">Jaegar Resto</h1>
      <p>Tuesday 2 Feb, 2021</p>
    </div>

    <input
      type="text"
      className="bg-[url('/search.svg')] bg-no-repeat bg-[14px_center] border-line bg-form hover:bg-[#373A48] focus:bg-[#1F1D2B] focus:border-[#ABBBC2] border-2 rounded-lg p-[14px] pl-10 box-content group-focus:bg-primary w-[164px] text-sm bg-transparent focus:outline-none"
      placeholder="Search for food, coffe, etc.."
    />
  </header>
);