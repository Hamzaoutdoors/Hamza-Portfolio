/* eslint-disable react/prop-types */
/* eslint-disable camelcase */
/* eslint-disable react/jsx-props-no-spreading */
import { useState } from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';

const SkillsBtn = styled(Button)`
  background-color: #203983 !important;
  text-decoration: none !important;
  text-align: center !important;
  color: white !important;
  border: 1px solid #6d7993 !important;
  border-radius: 10px !important;
  padding: 0.3rem 0.5 !important;
  font-size: 0.5rem !important;
&:hover {
  color: #6d7993 !important;
  background-color: white !important;
`;

const Title = styled(DialogTitle)`
  background-color: #5688ae; 
  font-size: 1.5rem;
  font-weight: bold;
  color: white;
  font-family: 'Roboto', sans-serif;
`;

const SkillsContainer = styled(DialogContent)`
  padding: 0.5rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 100%;
  & > .desc {
    font-size: 1rem;
    font-weight: bold;
    font-family: 'Urbanist', sans-serif;
  }`;

const Skill = styled(Typography)`
  font-size: 1rem;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 0px 0px 1px ${(props) => props.color};
  font-family: 'Urbanist', sans-serif;
  border-radius: 15px !important;
  min-width: 100px;
  margin: 0.2rem 0.5rem;
  border: 1.5px solid #333 !important;
  padding: 0.3rem !important;
  text-align: center !important;
  color: white !important;
  background-color: ${(props) => props.color} !important;

  &:hover {
    transform: scale(1.1) !important;
  }
`;

const SkillLogo = styled(Typography)`
  width: 2rem;
  height: 2rem;
  border-radius: 10px !important;
  padding: 0.3rem !important;
  text-align: center !important;
`;

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(3),
    boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.75)',
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(2),
    boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.75)',
  },
}));

const BootstrapDialogTitle = (props) => {
  const { children, onClose, ...other } = props;

  return (
    <Title sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </Title>
  );
};

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node.isRequired,
  onClose: PropTypes.func.isRequired,
};

const SkillsDetail = ({ SkillDetail }) => {
  const { title, skills } = SkillDetail;

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <SkillsBtn variant="outlined" onClick={handleClickOpen}>
        See Skills Stack
      </SkillsBtn>

      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
          {title}
        </BootstrapDialogTitle>
        <SkillsContainer dividers>
          {skills && skills.map((skill) => (
            <Skill key={skill.id} color={skill.color}>
              {skill.logo && <SkillLogo src={skill.logo} alt={skill.name} variant="img" component="img" />}
              {skill.name}
            </Skill>
          ))}
        </SkillsContainer>
      </BootstrapDialog>
    </>
  );
};

export default SkillsDetail;

SkillsDetail.propTypes = {
  SkillDetail: PropTypes.shape({
    icon: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};
