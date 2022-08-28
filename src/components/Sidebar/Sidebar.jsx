import React from "react";
import {GoProject,GoDeviceDesktop} from "react-icons/go"
import {AiFillSchedule,AiFillSetting} from "react-icons/ai"
import {BsCalendarCheckFill} from "react-icons/bs"
import {FaFileInvoice,FaFileExport} from "react-icons/fa"
import {TbReport} from "react-icons/tb"

import {
  Drawer,
  DrawerBody,
  // DrawerFooter,
  DrawerHeader,
  //DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  useDisclosure,
} from "@chakra-ui/react";
import { HiOutlineViewList } from "react-icons/hi";
import { Navigate, useNavigate } from "react-router-dom";

function Sidebar({ children, ...rest }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  const navigate = useNavigate();

  const goproject=()=>{
    navigate("/mydesktime/project")
  }
  const desk=()=>{
    navigate("/mydesktime")
  }
  return (
    <>
      <Button ref={btnRef}  bg="#4ea819" color="white" onClick={onOpen}>
        <HiOutlineViewList size={20}/>
      </Button>
      <Drawer
        variant="alwaysOpen"
        {...rest}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        trapFocus={false}
        closeOnOverlayClick={false}
        blockScrollOnMount={false}
      >
        {/* <DrawerOverlay /> */}
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader fontSize={"30px"} fontWeight={"bold"}>
            DeskTime
          </DrawerHeader>

          <DrawerBody>
            <Button
            onClick={desk}
              _hover={{ bg: "#4ea819", color: " white" }}
              w="100%"
              h="65px"
              mt="5px"
              bg="white"
            >
              <GoDeviceDesktop/> My DeskTime
            </Button>
            <Button
            onClick={goproject}
              _hover={{ bg: "#4ea819", color: " white" }}
              w="100%"
              h="65px"
              mt="5px"
              bg="white"
            >
              <GoProject /> Projects
            </Button>
            <Button
              _hover={{ bg: "#4ea819", color: " white" }}
              w="100%"
              h="65px"
              mt="5px"
              bg="white"
            >
              <AiFillSchedule /> Calories Tracker
            </Button>
            <Button
              _hover={{ bg: "#4ea819", color: " white" }}
              w="100%"
              h="65px"
              mt="5px"
              bg="white"
            >
              <BsCalendarCheckFill /> Booking
            </Button>
            <Button
              _hover={{ bg: "#4ea819", color: " white" }}
              w="100%"
              h="65px"
              mt="5px"
              bg="white"
            >
              <FaFileInvoice/> Invoicing
            </Button>
            <Button
              _hover={{ bg: "#4ea819", color: " white" }}
              w="100%"
              h="65px"
              mt="5px"
              bg="white"
            >
              <TbReport/> Report
            </Button>
            <Button
              _hover={{ bg: "#4ea819", color: " white" }}
              w="100%"
              h="65px"
              mt="5px"
              bg="white"
            >
              <FaFileExport/> Export
            </Button>
            <Button
              _hover={{ bg: "#4ea819", color: " white" }}
              w="100%"
              h="65px"
              mt="5px"
              bg="white"
            >
              <AiFillSetting/> Setting
            </Button>
          </DrawerBody>
        </DrawerContent>
        
      </Drawer>
    </>
  );
}

export default Sidebar;
