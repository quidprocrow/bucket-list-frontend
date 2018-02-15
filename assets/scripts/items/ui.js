// const store = require('../store')
const indexItemsTemplate = require('../templates/indexItems.handlebars')
const createItemTemplate = require('../templates/createItem.handlebars')

const onCreateItemSuccess = function (data) {
  $('#createItemContainer').html('')
}

const onCreateItemFailure = function () {
  console.log('You failed...')
}

const onIndexItemsSuccess = function (data) {
  if (data.items.length < 1) {
    $('#bucketListBucket').html('')
    const createItemHTML = createItemTemplate()
    $('#createItemContainer').html(createItemHTML)
  } else {
    const indexItemsHTML = indexItemsTemplate({'items': data.items})
    $('#bucketListBucket').html(indexItemsHTML)
  }
}

const onIndexItemsFailure = function () {
  $('#errorMessageProfile').text('Unable to display Bucket-Items')
}

const onShowItemSuccess = function (data) {
  console.log('See your item!', data)
}

const onShowItemFailure = function () {
  console.log('You failed...no item for you')
}

const onUpdateItemSuccess = function (data) {
  console.log('Item updated', data)
}

const onUpdateItemFailure = function () {
  console.log('You failed...to update item')
}

const onDeleteItemSuccess = function () {
  // console.log('Item deleted')
}

const onDeleteItemFailure = function () {
  $('#errorMessageProfile').text('Unable to delete Bucket Item')
}

module.exports = {
  onCreateItemSuccess,
  onCreateItemFailure,
  onIndexItemsSuccess,
  onIndexItemsFailure,
  onShowItemSuccess,
  onShowItemFailure,
  onUpdateItemSuccess,
  onUpdateItemFailure,
  onDeleteItemSuccess,
  onDeleteItemFailure
}
