import { v4 as uuidv4 } from 'uuid';

// Validate document type and create unique file names
export function uploadDocument(file) {
  const allowedTypes = ['pdf', 'jpg', 'png', 'jpeg'];
  const fileExt = file.name.split('.').pop().toLowerCase();

  if (!allowedTypes.includes(fileExt)) {
    throw new Error('Invalid file type');
  }

  const uniqueName = `${uuidv4()}.${fileExt}`;
  return uniqueName;
}
