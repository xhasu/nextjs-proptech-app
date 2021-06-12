import DB from 'db.json';

const handler = (req, res) => {
  let data = {};
  let error = false;

  const { query: { id = false } = {}, body, method } = req;

  switch (method) {
    case 'GET':
      data = DB.find((item) => item.id == id);
      if (!data) error = 'Asset not found';
      res.status(200).json({ error, data });
      break;

    case 'PUT':
      data = DB.find((item) => item.id == id);
      if (!data) error = 'Asset not found';

      const update = {};
      body.name && (update['name'] = body.name);
      body.size && (update['size'] = body.size);
      body.price && (update['price'] = body.price);
      body.address && (update['address'] = body.address);

      data = {...data, ...update };
      res.status(201).json({ error, data });
      break;

    default:
      res.setHeader('Allow', ['GET', 'PUT'])
      res.status(405).end(`Method ${method} Not Allowed`)
      break;
  }
};

export default handler;
