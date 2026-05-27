const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors()); // ອະນຸຍາດໃຫ້ໜ້າເວັບດຶງຂໍ້ມູນໄດ້

const quotes = [
    "ຄວາມພະຍາຍາມ ບໍ່ເຄີຍທໍາຮ້າຍຄົນທີ່ຕັ້ງໃຈ.",
    "ການເລີ່ມຕົ້ນໃນມື້ນີ້ ຄືຄວາມສໍາເລັດໃນມື້ອື່ນ.",
    "ຢ່າຢຸດຮຽນຮູ້ ເພາະຊີວິດບໍ່ເຄີຍຢຸດສອນ."
];

// ເມື່ອເປີດໜ້າເວັບຫຼັງບ້ານ ໃຫ້ສົ່ງຄໍາຄົມແບບສຸ່ມອອກໄປ
app.get('/api/quote', (req, res) => {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    res.json({ quote: randomQuote });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});