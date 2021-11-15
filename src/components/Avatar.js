import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { deepOrange, green } from '@mui/material/colors';
import AssignmentIcon from '@mui/icons-material/Assignment';

export default function VariantAvatars() {
  return (
    <Stack direction="row" spacing={2}>
  
      <Avatar className='my-avatar-img' variant="rounded">
        <AssignmentIcon />
      </Avatar>
    </Stack>
  );
}
