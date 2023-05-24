import "../styles/globals.css";
import Link from "next/link";

export default function MyApp({ Component, pageProps }) {
  return (
    <div>
      <nav className="border-b p-6">
        <p className="text-4xl font-bold">NFT Marketplace</p>
        <div className="flex mt-4">
          <Link href="/" legacyBehavior>
            <a className="mr-6 text-pink-500 hover:text-pink-700">Home</a>
          </Link>
          <Link href="/create-nft" legacyBehavior>
            <a className="mr-6 text-pink-500 hover:text-pink-700">Sell NFT</a>
          </Link>
          <Link href="/my-nfts" legacyBehavior>
            <a className="mr-6 text-pink-500 hover:text-pink-700">My NFTs</a>
          </Link>
          <Link href="/dashboard" legacyBehavior>
            <a className="mr-6 text-pink-500 hover:text-pink-700">Dashboard</a>
          </Link>
        </div>
      </nav>
      <Component {...pageProps} />
    </div>
  );
}
