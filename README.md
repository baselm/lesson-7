# Adding a delete button to product card and products page. 

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
### Create an empty App
`npx create-react-app Lesson-7`

------------


The Project is divided into Seven branches each branch covers a certain step as below:
1.  Step 1 add new icon button to delete a product
```
 <IconButton onClick={ () => handleDelete(product.id)}> 
          <DeleteOutlineRounded fontSize='large'  style={{ color: '#0C7C90'}} />
        </IconButton>
```
2.  Step 2  add a new prop to pass the product id from the product card component to product page to handle the deletion of a specific product:
````
export default function ProductCard({product, handleDelete}){

}
````
3.  in the products page component handle the delete function as below:
```
 const handleDelete = async(id) => {

  setShowDeleteMsg(true);
  if (deleteItem && !showDeleteMsg)
  {
    console.log("handleDelete()", "deleteItem " + deleteItem,"showDeleteMsg "+ showDeleteMsg);

    await fetch('http://localhost:8000/products/' + id, {
    method : 'DELETE'
  }).then(  () => {const newProducts = products.filter(product => product.id != id);
    setProducts(newProducts);})
   
  

  }
  

 }
```
4.  add a dialog to confirm the deletion of a product:
```
  <Dialog
           open= {showDeleteMsg}>
          <DialogTitle >{"Delete product"}</DialogTitle>
          <DialogContent>
            <DialogContentText>{"Are you sure you want to delete this product"}</DialogContentText>
            <DialogActions>
          <Button onClick={ () => {setDeleteItem(false); setShowDeleteMsg(false);console.log("deleteItem " + deleteItem,"showDeleteMsg "+ showDeleteMsg);}} autoFocus>Disagree</Button>
          <Button onClick={ () => {setDeleteItem(true); setShowDeleteMsg(false); console.log("deleteItem " + deleteItem,"showDeleteMsg "+ showDeleteMsg);}} >
            Agree
          </Button>
        </DialogActions>
          </DialogContent>
        </Dialog>
```
5.  Step 5 use the stat hook to show the dialog message:
```
const [showDeleteMsg, setShowDeleteMsg]= useState(false);
const [deleteItem, setDeleteItem]= useState(false);
```
