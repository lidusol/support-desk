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

const getTickets = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.get(API_UIL, config);

  return response.data;
};

const ticketService = {
  createTicket,
  getTickets,
};

export default ticketService;
