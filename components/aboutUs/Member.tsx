import React from "react";
import Image from "next/image";
import Link from "next/link";

interface Props {
  id: string;
  name: string;
  socialId: string;
  link: string;
}
const Member: React.FC<Props> = ({ id, name, socialId, link }) => {
  return (
    <div>
      <Image
        src={`/assets/team/team-member_${id}.jpg`}
        alt="team-member"
        width={166}
        height={155}
      />
      <div className="text-2xl xl:text-3xl">{name}</div>
      <div className="text-xl">
        <Link href={link}>
          <a target="_blank">{socialId}</a>
        </Link>
      </div>
    </div>
  );
};

export default Member;
