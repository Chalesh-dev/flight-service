import React from "react";
import { Notification } from "../Icons";
import Link from "next/link";
import styles from "./styles.module.css";

const Right = () => {
  return (
    <div className="justify-center items-center gap-5 sm:flex hidden">
      <Link href="/trips" className="hover:text-[#1668e3]">Trips</Link>
      <Link href="/support" className="hover:text-[#1668e3]">Support</Link>
      <Link href="/notification" className="">
        <Notification className={styles.notification_svg} />
      </Link>
    </div>
  );
};

export default Right;