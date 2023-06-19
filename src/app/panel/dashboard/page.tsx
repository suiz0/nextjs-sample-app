"use client";

import authService from "@/auth/services/authService";
import { useRouter } from "next/navigation";
import ProtectedRoute from "@/auth/components/ProtectedRoute";
import Image from "next/image";
import styles from "./page.module.css";

export default function Page() {
  const router = useRouter();
  return (
    <ProtectedRoute router={router}>
      <main className={styles.main}>
        <div className={styles.description}>
          <p>
            Get started by editing&nbsp;
            <code className={styles.code}>src/app/page.tsx</code>
          </p>
          <div>
            <a
              href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              By{" "}
              <Image
                src="/vercel.svg"
                alt="Vercel Logo"
                className={styles.vercelLogo}
                width={100}
                height={24}
                priority
              />
            </a>
          </div>
        </div>

        <div className={styles.center}>
          <Image
            className={styles.logo}
            src="/next.svg"
            alt="Next.js Logo"
            width={180}
            height={37}
            priority
          />
        </div>

        <div className={styles.grid}>
          <a
            href="#"
            className={styles.card}
            rel="noopener noreferrer"
            onClick={() => {
              authService.logout();
              router.push("/auth");
            }}
          >
            <h2>
              Logout <span>-&gt;</span>
            </h2>
            <p>Go back to login</p>
          </a>
        </div>
      </main>
    </ProtectedRoute>
  );
}
