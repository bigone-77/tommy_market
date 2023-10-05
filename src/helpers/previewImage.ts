export default function previewImage  (e: any, setImagePreview: any, setImage: any)  {
    const file = e.target.files[0];
    setImagePreview(file);

    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
        console.log(reader.result);
        setImagePreview(reader.result);
        
    }
    
}