import { Box } from '@chakra-ui/layout';
import AdminLayout from '../layouts/AdminLayout';

export default function Admin() {
  return (
    <AdminLayout>
      {[...Array(100)].map((x, i) => (
        <Box key={i}>Text {i}</Box>
      ))}
    </AdminLayout>
  );
}
