import { Carousel } from "react-bootstrap";
import "../styles/ProjectCard.css";
import { useState } from "react";
import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  Collapse,
  Typography,
  IconButton,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Tooltip,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import {
  GitHub as GitHubIcon,
  ExpandMore as ExpandMoreIcon,
  FiberManualRecord as BulletIcon,
  Language as WebIcon
} from "@mui/icons-material";

const CollapseContent = styled(CardContent)(({ theme }) => ({
  height: "22rem",
  overflowY: "auto",
  "&::-webkit-scrollbar": {
    width: "8px",
  },
  "&::-webkit-scrollbar-thumb": {
    backgroundColor: theme.palette.grey[500],
    borderRadius: "4px",
  },
  "&::-webkit-scrollbar-track": {
    backgroundColor: theme.palette.grey[200],
    borderRadius: "4px",
  },
}));

export default function ({ project }) {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className="project-card">
      <CardHeader title={project.title} className="card-title" />
      {project.images && (
        <Carousel>
          {project.images.map((image, index) => (
            <Carousel.Item key={index}>
              <CardMedia
                component="img"
                image={image}
                alt={`Project image ${index + 1}`}
                className="card-img"
              />
            </Carousel.Item>
          ))}
        </Carousel>
      )}
      <CardContent className="card-content">
        <Typography variant="body" color="text.secondary">
          {project.description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing className="card-actions">
        <Tooltip title="Open GitHub Repo" arrow placement="top">
          <IconButton
            aria-label="Open GitHub Repo"
            href={project.gitHub_URL}
            target="_blank"
            className="icon-button"
          >
            <GitHubIcon />
          </IconButton>
        </Tooltip>
        {project.liveSite_URL && <Tooltip title="Live Site" arrow placement="top">
          <IconButton
            aria-label="Live Site"
            href={project.liveSite_URL}
            target="_blank"
            className="icon-button"
          >
            <WebIcon />
          </IconButton>
        </Tooltip>}
        <Tooltip title="Show Detail" arrow placement="top">
          <IconButton
            onClick={handleExpandClick}
            aria-expanded={expanded}
            className="expand-more"
          >
            <ExpandMoreIcon />
          </IconButton>
        </Tooltip>
      </CardActions>
      <Collapse
        in={expanded}
        timeout="auto"
        unmountOnExit
        className="card-collapse"
      >
        <CollapseContent>
          <Typography variant="h5" gutterBottom align="left">
            Features:
          </Typography>
          <List className="feature-list">
            {project.features.map((feature, index) => (
              <ListItem key={index} className="list-item">
                <ListItemIcon className="list-icon">
                  <BulletIcon className="bullet-icon" />
                </ListItemIcon>
                <ListItemText primary={feature} />
              </ListItem>
            ))}
          </List>
          {project.technologies && (
            <>
              <Typography variant="h5" gutterBottom align="left">
                Technologies Used:
              </Typography>
              <List className="technology-list">
                {Object.entries(project.technologies).map(
                  ([category, techList], index) => (
                    <div key={index}>
                      <Typography variant="h6" gutterBottom align="left">
                        {category}:
                      </Typography>
                      {techList.map((tech, i) => (
                        <ListItem key={i} className="list-item tech-item">
                          <ListItemIcon className="list-icon">
                            <BulletIcon className="bullet-icon" />
                          </ListItemIcon>
                          <ListItemText primary={tech} />
                        </ListItem>
                      ))}
                    </div>
                  )
                )}
              </List>
            </>
          )}
        </CollapseContent>
      </Collapse>
    </Card>
  );
}
