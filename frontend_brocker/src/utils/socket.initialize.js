import { io } from "socket.io-client";
import { BASE_URL_SOCKET } from "../constants/BASE_URL_SOCKET";

export const socket = io(BASE_URL_SOCKET)