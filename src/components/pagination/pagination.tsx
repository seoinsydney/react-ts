import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import './index.scss';

export default function BasicPagination() {

  return (
    <Stack spacing={2}>
      <Pagination 
        page={1}
        count={5}
        defaultPage={1} 
        color="primary" 
        />
    </Stack>
  );
}