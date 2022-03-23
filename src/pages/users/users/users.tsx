import { Button, Paper, styled, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import { useState } from "react";
import { UserDetail } from "../user-detail/user-detail";

const UsersRoot = styled('div')`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

interface Props {

}
export const Users: React.FC<Props> = () => {

  const [userDialogOpen, setUserDialogOpen] = useState(false);

  const users: Array<Partial<User>> =
    [{ "firstName": "Glynnis", "lastName": "Whight", "position": "Office Assistant IV" },
    { "firstName": "Cammi", "lastName": "Annies", "position": "Automation Specialist II" },
    { "firstName": "Libbey", "lastName": "Pettis", "position": "Associate Professor" },
    { "firstName": "Jennette", "lastName": "Korting", "position": "Senior Developer" },
    { "firstName": "Beulah", "lastName": "Forlong", "position": "Editor" },
    { "firstName": "Steffie", "lastName": "Jacmard", "position": "General Manager" },
    { "firstName": "Celestyn", "lastName": "Thody", "position": "Sales Representative" },
    { "firstName": "Tucky", "lastName": "Paske", "position": "Information Systems Manager" },
    { "firstName": "Evvy", "lastName": "McRobb", "position": "Actuary" },
    { "firstName": "Emilee", "lastName": "Dinsdale", "position": "Help Desk Operator" },
    { "firstName": "Adriane", "lastName": "Bafford", "position": "Analog Circuit Design manager" },
    { "firstName": "Sheela", "lastName": "Potter", "position": "Dental Hygienist" },
    { "firstName": "Erwin", "lastName": "Lidgard", "position": "Software Consultant" },
    { "firstName": "Bliss", "lastName": "Siccombe", "position": "Help Desk Operator" },
    { "firstName": "Mattias", "lastName": "Cutchie", "position": "Design Engineer" },
    { "firstName": "Heinrik", "lastName": "Barhims", "position": "Accountant III" },
    { "firstName": "Giulietta", "lastName": "Wickett", "position": "Cost Accountant" },
    { "firstName": "Caz", "lastName": "Clapson", "position": "Technical Writer" },
    { "firstName": "Elva", "lastName": "Esposito", "position": "Accountant II" },
    { "firstName": "Carolann", "lastName": "Josifovic", "position": "Help Desk Operator" },
    { "firstName": "Claudetta", "lastName": "Gush", "position": "Assistant Media Planner" },
    { "firstName": "Ritchie", "lastName": "Napper", "position": "Biostatistician IV" },
    { "firstName": "Wilmer", "lastName": "Rois", "position": "Tax Accountant" },
    { "firstName": "Murry", "lastName": "Hindes", "position": "Systems Administrator II" },
    { "firstName": "Delcine", "lastName": "Warr", "position": "Financial Analyst" },
    { "firstName": "Melonie", "lastName": "Kinsella", "position": "Structural Engineer" },
    { "firstName": "Hortensia", "lastName": "Colbeck", "position": "Internal Auditor" },
    { "firstName": "Valentina", "lastName": "Domican", "position": "Librarian" },
    { "firstName": "Godfrey", "lastName": "Bale", "position": "Food Chemist" },
    { "firstName": "Catlee", "lastName": "Ferrero", "position": "Legal Assistant" }];

  return (
    <UsersRoot >
      <div>
        <Button variant="contained" startIcon={<PersonAddAltOutlinedIcon />} onClick={() => setUserDialogOpen(true)}>New user</Button>
      </div>

      <TableContainer component={Paper} sx={{ my: 2 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="right">Position</TableCell>
              <TableCell align="right">Team</TableCell>
              <TableCell align="right">Projects</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {users.map((user, i) => (
              <TableRow key={i} sx={{ '&:last-child td, &:last-child-th': { border: 0 } }}>
                <TableCell component="th" scope="row">{`${user.firstName} ${user.lastName}`}</TableCell>
                <TableCell align="right">{user.position}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <UserDetail openDialog={userDialogOpen} handleClose={() => setUserDialogOpen(false)}></UserDetail>
    </UsersRoot>
  );

}