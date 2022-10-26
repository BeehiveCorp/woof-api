import express from 'express';
import cors from 'cors';

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.json([
    {
      question: 'Como o kit é instalado?',
      answer:
        'Durante a compra de seu pacote, caso faça a escolha pela instalação profissional, você poderá agendar a visita de um especialista',
    },
    {
      question: 'Tenho mais de um pet, o produto é pra mim?',
      answer:
        'Ao se aproximar do comedor, você receberá um alerta e poderá ver qual dos seus pets que se encontra ali, podendo então, liberar ou não a comidinha. Lembrando que cada pet tem um comportamento ao se alimentar, então, recomendamos testar para ver se essa solução será viável para você e seus pets.',
    },
    {
      question: 'Posso adquirir novas funcionalidades ao meu plano?',
      answer: 'Claro, você pode começar com apenas uma solução!',
    },
    {
      question: 'Meu pet precisa de algum tipo de treinamento?',
      answer: 'Não.',
    },
  ]);
});

app.listen(port, () => console.log(`Server started on port ${port}`));
