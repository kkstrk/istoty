import { Cloudinary } from "@cloudinary/url-gen";

const cld = new Cloudinary({
	cloud: { cloudName: 'istoty' }
});

export default cld;
