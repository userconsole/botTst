export default function handler(res) {

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
