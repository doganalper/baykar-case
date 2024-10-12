import Image from "next/image";

type Props = {
  img: string;
  name: string;
  occupation: string;
};
export function BecauseSlideUser({ img, name, occupation }: Props) {
  return (
    <div className="because__slide-user-container">
      <Image src={img} alt={name} width={64} height={64} />
      <div className="">
        <div className="because__slide-user-name">{name}</div>
        <div className="because__slide-user-occupation">{occupation}</div>
      </div>
    </div>
  );
}
