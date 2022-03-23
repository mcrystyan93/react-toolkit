import { Button, Dialog, DialogActions, DialogContent, DialogTitle, useMediaQuery, useTheme } from '@mui/material';
import { useState } from 'react';

import { UserDetailForm } from './user-detail-form';

interface Props {
  openDialog: boolean;
  handleClose: React.MouseEventHandler<HTMLButtonElement>;
  existingUser?: Partial<User>;
}
export const UserDetail: React.FC<Props> = ({ openDialog, handleClose, existingUser }) => {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  const onFormSubmit = (user: Partial<User>) => {
    console.log(user);
  }

  const content = (
    <>
      <UserDetailForm user={existingUser} onFormSubmit={onFormSubmit}></UserDetailForm>
    </>
  );

  return (
    <>
      <Dialog open={openDialog} fullWidth={true} maxWidth="sm" fullScreen={fullScreen}>
        <DialogTitle>
          {existingUser ? `${existingUser.firstName} ${existingUser.lastName}` : 'New user'}
        </DialogTitle>
        <DialogContent>
          {content}
        </DialogContent>
        <DialogActions>
          <Button form="userForm" type="submit">Save</Button>
          <Button type="button" onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </>
  );

}