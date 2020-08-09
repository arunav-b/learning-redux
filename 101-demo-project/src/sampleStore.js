{
  balance: 25000;
  sends: [
    {
      send_id: 1,
      contact_id: 1,
      amount: 1000,
      upid: "DrjO6eziKc1pKDNYGUSiCQ00-63BAH59US0",
      e2e_id: "Avinash1596704106873",
      status: "sent",
    },
    {
      send_id: 2,
      contact_id: 2,
      amount: 1200,
      upid: "AsJios9u923skZNYGUSssQ00-89j2S59US0",
      e2e_id: "Rince8u892300689027",
      status: "refunded",
    },
  ];
  splits: [
    {
      split_id: 1,
      split_amount: 200,
      contact_id: 1,
      status: "initiated",
    },
    {
      split_id: 2,
      split_amount: 200,
      contact_id: 3,
      status: "processed",
    },
  ];
  contacts: [
    {
      contact_id: 1,
      name: "Avinash",
      contact: "avinash@gmail.com",
      isChecked: false,
    },
    { contact_id: 2, name: "Rince", contact: "293 020 0902", isChecked: false },
    {
      contact_id: 3,
      name: "Bharat",
      contact: "602 312 8164",
      isChecked: false,
    },
    {
      contact_id: 4,
      name: "Brandon",
      contact: "480 892 2131",
      isChecked: false,
    },
    {
      contact_id: 5,
      name: "Kinderley",
      contact: "672 892 8732",
      isChecked: false,
    },
    {
      contact_id: 6,
      name: "Mohil",
      contact: "mohil@paypal.com",
      isChecked: false,
    },
    { contact_id: 7, name: "Swati", contact: "789 312 6790", isChecked: false },
  ];
  transactions: [
    {
      transaction_id: 1,
      name: "Grand Lux Cafe  ---------------------------  $700.00",
      amount: 700,
      expense: "Grand Lux Cafe",
      status: "ready for split",
    },
    {
      transaction_id: 2,
      name: "AT&T Membership ----------------------  $1200.00",
      amount: 1200,
      expense: "AT&T Membership",
      status: "ready for split",
    },
    {
      transaction_id: 3,
      name: "AirBnB  -------------------------------------  $1800.00",
      amount: 1800,
      expense: "AirBnB",
      status: "ready for split",
    },
    {
      transaction_id: 4,
      name: "NFL Tickets  ----------------------------  $1500.00",
      amount: 1500,
      expense: "NFL Tickets",
      status: "initiated",
      contact_ids: [3, 5, 6],
    },
  ];
}
