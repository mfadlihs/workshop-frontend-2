import GithubIcon from "../assets/icons/github.svg";

export default function Header() {
  return (
    <div className="bg-[#E9EFF6] py-4 shadow-md px-6">
      <div className="flex justify-between max-w-4xl mx-auto">
        <div className="text-xl">Workshop Frontend 2</div>
        <a
          href="https://github.com/mfadlihs/workshop-frontend-2"
          target="_blank"
        >
          <img src={GithubIcon} width={28} />
        </a>
      </div>
    </div>
  );
}
