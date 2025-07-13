import { Input } from "@/components/ui/input";
import { putImage } from "@/lib/product";

export function ImageInput({ onChange, value }) {
  const handleFileChange = async (e) => {
    try {
      if (!e.target.files) {
        return;
      }
      const file = e.target.files[0];
      if (!file) {
        return;
      }
      const url = await putImage({ file });
      onChange(url);
    } catch (error) {
      console.log("Error while uploading file");
    }
  };

  return (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Input id="document" type="file" onChange={handleFileChange} />
    </div>
  );
}
