import axios from "axios";

const API_UIL = "/api/tickets/";

const createTicket = async (ticketData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.post(API_UIL, ticketData, config);

  return response.data;
};

const ticketService = {
  createTicket,
};

export default ticketService;
