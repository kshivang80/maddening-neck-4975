import React from 'react';
import { useNavigate } from "react-router-dom";
import { MdKeyboardArrowDown } from "react-icons/md";
import { AiOutlineMobile } from "react-icons/ai";
import { BsCart2 } from "react-icons/bs";
import { HiOutlineUser } from "react-icons/hi";
import { TbDiscount2 } from "react-icons/tb";
import { Button } from "@chakra-ui/react";
import styles from "./navbar.module.css";
import Pincode from '../PincodeDrawer/Pincode';
import logo from '../../Assets/Meds Ease-Logo.png'; 

const Navbar = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/")
  }

  return (
    <div
      style={{
        backgroundColor: "#ffffff",
        position: "sticky",
        top: "0px",
        zIndex: "1000",
        borderBottom: "1px solid #dfdfdf",
        height: "62px",
      }}
    >
      <div className={styles.navbar}>
        <div className={styles.imageDiv}>
          <img
            style={{ cursor: "pointer", height: "55px", width: "50%" }}
            onClick={handleClick}
            src={logo}
            alt="Home logo"
          />
        </div>
        <div className={styles.LinkDiv}>
          <div style={{ display: "flex" }}>
            <Pincode />
            <MdKeyboardArrowDown className={styles.downArrowIcon} />
          </div>
          <div className={styles.links2}>
            <div>
              <a
                href="https://apps.apple.com/IN/app/id982432643?mt=8"
                target={"_blank"}
                rel="noreferrer"
              >
                <Button backgroundColor={"#EEF4FE"} fontSize="14px">
                  <AiOutlineMobile
                    style={{ fontSize: "25px", marginRight: "10px" }}
                  />
                  Download App
                </Button>
              </a>
            </div>
            <div className={styles.links2Icons}>
              <HiOutlineUser style={{ fontSize: "20px", marginRight: "0px" }} />
              {/* <Login /> */}
            </div>
            <div className={styles.links2Icons}>
              <TbDiscount2 style={{ fontSize: "20px", marginRight: "10px" }} />
              <a href="#offers" style={{ fontSize: "14px", fontWeight: "500" }}>
                Offers
              </a>
            </div>
            <div className={styles.links2Icons}>
              <BsCart2 style={{ fontSize: "20px", marginRight: "10px" }} />
              <a href="/cart" style={{ fontSize: "14px", fontWeight: "500" }}>
                Cart
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar;