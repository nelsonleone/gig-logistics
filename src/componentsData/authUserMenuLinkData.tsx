import { IconType } from "react-icons"
import { FaRegEdit } from "react-icons/fa"
import { FiUser } from "react-icons/fi"
import { IoMdWallet } from "react-icons/io"
import { TbLogout } from "react-icons/tb"
import { MdLockReset } from "react-icons/md"

interface IauthUserMenuLinkData {
    icon: IconType,
    text: string,
    link: string
}

export const authUserMenuLinkData : IauthUserMenuLinkData[] = [
    {
        icon: FiUser,
        text: "My Profile",
        link: `${process.env.NEXT_PUBLIC_APP_URL}/user_profile` || ""
    },
    {
        icon: IoMdWallet,
        text: "My Transactions",
        link: `${process.env.NEXT_PUBLIC_APP_URL}/wallet` || ""
    },
    {
        icon: FaRegEdit,
        text: "Change Wallet Pin",
        link: process.env.NEXT_PUBLIC_APP_URL || ""
    },
    {
        icon: MdLockReset,
        text: "Reset Wallet Pin",
        link: process.env.NEXT_PUBLIC_APP_URL || ""
    },
    {
        icon: TbLogout,
        text: "Logout",
        link: `${process.env.NEXT_PUBLIC_APP_URL}/api/auth/sign_out` || ""
    }
]