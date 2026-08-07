export default function handler(res, req) {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,OPTIONS');
  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }


  if (req.method === 'GET') {
    return res.status(200).json({
      status: 'success',
      data: [
        {id:1, name: 'Crowlore', rank: 'Leader' },
        {id:1, name: 'Clon Alexey', rank: 'Warrior'},
        {id:1, name: 'Clon Siran', rank: 'Warrior'},
        {id:1, name: 'Clon KIRILL', rank: 'Warrior'}
      ]
    })
  }
  return res.status(405).json({error: 'Че за методы ???'})
}
