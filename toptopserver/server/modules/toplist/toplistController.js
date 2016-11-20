import TopList from './toplistModel';
import Item from '../item/itemModel';

const createMessageSuccess = 'TopList successfully created!';
const deleteMessageSuccess = 'TopList successfully deleted!';
const updateMessageSuccess = 'TopList successfully updated!';
const validationMessage = 'is required!';

/**
* GET ALL TOPLISTS
*/
export const getAll = (req, res) => {
  TopList.find({})
    .then(toplists => {
      return res.status(200).json({ success: true, toplists });
    })
    .catch(error => res.status(404).json({ success: false, error }));
};

/**
* GET ONE TOPLIST
* @param {integer} id
*/
export const getOne = (req, res) => {
  TopList.findById(req.params.id)
    .populate('items')
    .then(toplist => {
      return res.status(200).json({ success: true, toplist });
    })
    .catch(error => res.status(400).json({ success: false, error }));
};

/**
* CREATE
* @param {object} title: String, description: String
*/
export const create = (req, res) => {
  const title = req.body.title;
  const description = req.body.description;
  const coverImage = req.body.coverImage;
  const items = req.body.items;
  const genre = req.body.genre;

  /**
  * VALIDATION
  */

  if (!title) {
    return res.status(400).json({ success: false, message: `A title ${validationMessage}` });
  }

  const newToplist = new TopList({ title, description, coverImage, genre });

  /**
  * I received items as an array of object from the fe
  * [{ name: 'item 1' }, { name: 'item 2'}]
  */

  for (let i = 0; i < items.length; i++) {
    const newItem = new Item({ name: items[i].name });
    newToplist.items.push(newItem);
    newItem.save().catch(err => console.log(err)); // eslint-disable-line
  }

  newToplist.save()
    .then(toplist => {
      return res.status(201)
        .json({ success: true, toplist, message: createMessageSuccess });
    })
    .catch(error => res.status(400).json({ success: false, error }));
};

/**
* DELETE
* @param {integer} id
*/
export const deleteOne = (req, res) => {
  TopList.remove(req.params.id)
    .then(() => res.status(202).json({ success: true, message: deleteMessageSuccess }))
    .catch(error => res.status(400).json({ success: false, error }));
};

/**
* UPDATE
* @param {integer} id
*/
export const updateOne = (req, res) => {
  const updateTopList = req.body;
  TopList.findByIdAndUpdate(req.params.id, updateTopList, { new: true })
    .then(toplist => {
      return res.status(200).json({ success: true, toplist, message: updateMessageSuccess });
    })
    .catch(error => res.status(400).json({ success: false, error }));
};
