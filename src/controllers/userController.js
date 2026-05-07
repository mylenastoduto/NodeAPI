exports.getWelcome = (req, res) => {
  res.json({ message: 'Bem-vindo à API de estudos (versão modular)!' });
};

exports.getGreeting = (req, res) => {
  const { nome } = req.params;
  res.json({ message: `Olá, ${nome}!` });
};

exports.postInfo = (req, res) => {
  const data = req.body;
  res.json({
    received: data,
    status: 'success',
    context: 'Modular Controller'
  });
};
