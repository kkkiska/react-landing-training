import './header.css'

export default function Header() {
    return (
        <header className="header">
            <div className="container">
                <div className="header-wrapper">
                    <svg width="128" height="32" viewBox="0 0 128 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect opacity="0.35" y="22" width="125" height="6" fill="#C9A96E"/>
                        <path d="M6.05 23.325C6.81667 23.425 7.54167 23.6667 8.225 24.05V25H0.5V24.05C0.766667 23.9 1.05 23.7667 1.35 23.65C1.65 23.5167 1.96667 23.4083 2.3 23.325V9.175C1.91667 9.09167 1.575 8.98333 1.275 8.85C0.991667 8.71667 0.733333 8.58333 0.5 8.45V7.5H13.575C13.575 7.83333 13.5583 8.2 13.525 8.6C13.4917 8.98333 13.45 9.38333 13.4 9.8C13.3667 10.2 13.3167 10.6 13.25 11C13.2 11.3833 13.1417 11.7417 13.075 12.075H12.05L10.9 9.125H6.05V15.7H9.625L10.6 13.975H11.375C11.4917 14.825 11.5417 15.7 11.525 16.6C11.5083 17.5 11.4583 18.325 11.375 19.075H10.6L9.625 17.325H6.05V23.325ZM20.6623 25H14.4873V24.05C14.754 23.8833 15.0373 23.7417 15.3373 23.625C15.654 23.4917 15.9623 23.3917 16.2623 23.325L22.7123 7.2H24.5623L30.8373 23.325C31.1706 23.3917 31.504 23.4917 31.8373 23.625C32.1706 23.7417 32.4623 23.8833 32.7123 24.05V25H24.8873V24.05C25.204 23.9 25.5456 23.7583 25.9123 23.625C26.279 23.4917 26.629 23.3917 26.9623 23.325L25.5123 19.35H19.9623L18.4873 23.325C19.254 23.425 19.979 23.6667 20.6623 24.05V25ZM20.5623 17.725H24.9873L23.3623 12.95L22.8873 10.8H22.8373L22.2873 13L20.5623 17.725ZM39.1252 22.925C39.3085 23.1083 39.5669 23.2833 39.9002 23.45C40.2335 23.6 40.6752 23.675 41.2252 23.675C42.1419 23.675 42.9002 23.4417 43.5002 22.975C44.1169 22.4917 44.4252 21.825 44.4252 20.975C44.4252 20.3583 44.2252 19.8417 43.8252 19.425C43.4419 19.0083 42.9502 18.625 42.3502 18.275C41.7502 17.925 41.1085 17.5833 40.4252 17.25C39.7419 16.9 39.1002 16.4917 38.5002 16.025C37.9002 15.5583 37.4002 15.0083 37.0002 14.375C36.6169 13.725 36.4252 12.925 36.4252 11.975C36.4252 11.1583 36.5752 10.45 36.8752 9.85C37.1752 9.25 37.5835 8.75833 38.1002 8.375C38.6335 7.975 39.2585 7.68333 39.9752 7.5C40.6919 7.3 41.4669 7.2 42.3002 7.2C43.3169 7.2 44.2585 7.275 45.1252 7.425C46.0085 7.55833 46.8002 7.775 47.5002 8.075C47.4835 8.40833 47.4502 8.79167 47.4002 9.225C47.3669 9.65833 47.3169 10.0917 47.2502 10.525C47.1835 10.9417 47.1085 11.3417 47.0252 11.725C46.9585 12.0917 46.8919 12.4 46.8252 12.65H45.8002L44.6502 9.225C44.4502 9.125 44.1502 9.03333 43.7502 8.95C43.3669 8.86667 42.9669 8.825 42.5502 8.825C41.8502 8.825 41.2585 9.00833 40.7752 9.375C40.2919 9.74167 40.0502 10.275 40.0502 10.975C40.0502 11.6083 40.2502 12.15 40.6502 12.6C41.0502 13.0333 41.5502 13.4333 42.1502 13.8C42.7502 14.1667 43.4002 14.5333 44.1002 14.9C44.8169 15.25 45.4752 15.6583 46.0752 16.125C46.6752 16.5917 47.1752 17.1417 47.5752 17.775C47.9752 18.3917 48.1752 19.1583 48.1752 20.075C48.1752 21.7417 47.6085 23.0333 46.4752 23.95C45.3585 24.85 43.7085 25.3 41.5252 25.3C40.9919 25.3 40.4502 25.2667 39.9002 25.2C39.3669 25.1333 38.8585 25.0417 38.3752 24.925C37.8919 24.8083 37.4585 24.6833 37.0752 24.55C36.7085 24.4167 36.4335 24.275 36.2502 24.125C36.2669 23.7417 36.3085 23.3333 36.3752 22.9C36.4419 22.45 36.5085 22.0083 36.5752 21.575C36.6585 21.125 36.7419 20.7 36.8252 20.3C36.9085 19.9 36.9919 19.55 37.0752 19.25H38.1002L39.1252 22.925ZM59.7156 25H52.1406V24.05C52.424 23.9 52.749 23.7583 53.1156 23.625C53.499 23.4917 53.8573 23.3917 54.1906 23.325V9.175C53.7906 9.10833 53.4073 9.00833 53.0406 8.875C52.674 8.74167 52.374 8.6 52.1406 8.45V7.5H59.7156V8.45C59.4656 8.61667 59.1823 8.76667 58.8656 8.9C58.5656 9.03333 58.2573 9.125 57.9406 9.175V15.225H64.5656V9.175C64.199 9.10833 63.8656 9.00833 63.5656 8.875C63.2823 8.74167 63.024 8.6 62.7906 8.45V7.5H70.3656V8.45C70.0823 8.63333 69.7573 8.78333 69.3906 8.9C69.024 9.01667 68.6656 9.10833 68.3156 9.175V23.325C68.699 23.3917 69.0656 23.4917 69.4156 23.625C69.7823 23.7583 70.099 23.9 70.3656 24.05V25H62.7906V24.05C63.0406 23.9 63.3156 23.7583 63.6156 23.625C63.9156 23.4917 64.2323 23.3917 64.5656 23.325V16.85H57.9406V23.325C58.274 23.3917 58.5823 23.4833 58.8656 23.6C59.149 23.7167 59.4323 23.8667 59.7156 24.05V25ZM81.9045 25H74.1045V24.05C74.7712 23.6833 75.4462 23.4417 76.1295 23.325V9.175C75.7962 9.125 75.4462 9.03333 75.0795 8.9C74.7128 8.76667 74.3878 8.61667 74.1045 8.45V7.5H81.9045V8.45C81.6045 8.63333 81.2712 8.79167 80.9045 8.925C80.5545 9.04167 80.2128 9.125 79.8795 9.175V23.325C80.2128 23.3917 80.5545 23.4833 80.9045 23.6C81.2712 23.7167 81.6045 23.8667 81.9045 24.05V25ZM86.1313 16.25C86.1313 14.95 86.3146 13.75 86.6813 12.65C87.0479 11.5333 87.5896 10.575 88.3063 9.775C89.0229 8.95833 89.9063 8.325 90.9563 7.875C92.0063 7.425 93.2146 7.2 94.5813 7.2C95.9479 7.2 97.1563 7.425 98.2063 7.875C99.2563 8.325 100.131 8.95833 100.831 9.775C101.548 10.575 102.09 11.5333 102.456 12.65C102.823 13.75 103.006 14.95 103.006 16.25C103.006 17.55 102.823 18.7583 102.456 19.875C102.09 20.975 101.548 21.9333 100.831 22.75C100.131 23.55 99.2563 24.175 98.2063 24.625C97.1563 25.075 95.9479 25.3 94.5813 25.3C93.2146 25.3 92.0063 25.075 90.9563 24.625C89.9063 24.175 89.0229 23.55 88.3063 22.75C87.5896 21.9333 87.0479 20.975 86.6813 19.875C86.3146 18.7583 86.1313 17.55 86.1313 16.25ZM90.3813 16.25C90.3813 17.3167 90.4646 18.3083 90.6313 19.225C90.7979 20.125 91.0563 20.9083 91.4062 21.575C91.7729 22.225 92.2313 22.7417 92.7813 23.125C93.3479 23.4917 94.0229 23.675 94.8063 23.675C95.5229 23.675 96.1313 23.4917 96.6313 23.125C97.1313 22.7417 97.5396 22.225 97.8563 21.575C98.1729 20.9083 98.3979 20.125 98.5313 19.225C98.6813 18.3083 98.7563 17.3167 98.7563 16.25C98.7563 15.1833 98.6729 14.2 98.5063 13.3C98.3563 12.3833 98.1063 11.6 97.7563 10.95C97.4229 10.2833 96.9729 9.76667 96.4063 9.4C95.8563 9.01667 95.1813 8.825 94.3813 8.825C93.6146 8.825 92.9729 9.01667 92.4563 9.4C91.9396 9.76667 91.5229 10.2833 91.2063 10.95C90.9063 11.6 90.6896 12.3833 90.5563 13.3C90.4396 14.2 90.3813 15.1833 90.3813 16.25ZM118.754 7.5H124.954V8.45C124.637 8.7 124.287 8.925 123.904 9.125C123.521 9.30833 123.162 9.45 122.829 9.55V25.3H120.704L111.879 12.55L110.879 10.625H110.804L111.029 12.625V23.05C111.362 23.1333 111.729 23.275 112.129 23.475C112.546 23.6583 112.896 23.85 113.179 24.05V25H107.004V24.05C107.304 23.85 107.629 23.6667 107.979 23.5C108.346 23.3167 108.721 23.1667 109.104 23.05V9.4C108.771 9.26667 108.437 9.11667 108.104 8.95C107.771 8.78333 107.471 8.60833 107.204 8.425V7.5H112.604L119.779 17.9L120.929 20.05H121.029L120.904 17.9V9.55C120.504 9.41667 120.112 9.25833 119.729 9.075C119.362 8.875 119.037 8.66667 118.754 8.45V7.5Z" fill="#171717"/>
                    </svg>
                    <nav className="nav">
                        <li className="nav-item active"><a href="">Home</a></li>
                        <li className="nav-item"><a href="">Recipes</a></li>
                        <li className="nav-item"><a href="">Article</a></li>
                        <li className="nav-item"><a href="">Contact</a></li>
                        <li className="nav-item"><a href="">Purchase</a></li>
                    </nav>
                </div>
            </div>
        </header>
    )
}