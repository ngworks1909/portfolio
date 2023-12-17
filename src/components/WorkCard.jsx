import React from "react";
import styled from "styled-components";
import image from '../assets/project.png'
import { RxExternalLink } from "react-icons/rx";
import { AiOutlineGithub } from "react-icons/ai";
import { Link } from "react-router-dom";
import '../css/WorkCard.css'
import spotify from '../assets/spotify.png'
import notes from '../assets/notes.png'
import whatsapp from '../assets/whatsapp.png'

const WorkCard = () => {
  const reversedData = [
    {
        id : 7,
        img : image,
        title : "Lorem ipsum dolor sit",
        desc : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, tempore unde hic laboriosam iusto eos",
        link : "/",
        git : "/"
    },
    {
        id : 8,
        img : whatsapp,
        title : "Whatsapp-Clone",
        desc : "WhatsApp, a messaging app, connects people worldwide through text. It ensures secure and private communication. Enjoy seamless communication with friends and family across the globe.",
        link : "https://ngworks-whatsapp.netlify.app",
        git : "https://github.com/ngworks1909/whatsapp-clone"
    },
    {
        id : 9,
        img : notes,
        title : "Notes App",
        desc : "A handy notes app to jot down your thoughts and to-dos easily. It keeps everything organized, syncs across your devices, and lets you customize how you want to arrange your notes. ",
        link : "https://ngworks-notes.netlify.app",
        git : "https://github.com/ngworks1909/notes-app"
    },
    {
        id : 10,
        img : spotify,
        title : "Spotify-Clone",
        desc : "Spotify offers 82 songs where a user can play songs according to their choice",
        link : "https://ngworks-spotify.netlify.app",
        git : "https://github.com/ngworks1909/spotify"
    },
  ].reverse();

  return (
    <>
    <div className="total-works">
    {reversedData.map((data) => {
        return (
          <div data-aos="zoom-in" key={data.id} className="workcard1">
            <POPUP className="img-content workcard2">
              <div className="workcard3">
                <img src={data.img} alt={data.title} className="workcard4"/>
              </div>
              <div className={` popup workcard5`}>
                <p className="workcard6">
                  {data.desc}
                </p>
                <div className="workcard7">
                  <Link to={data.link} target="_blank" className="workcard8">
                    <RxExternalLink className="workcard9" />
                    <p className="workcard10">Demo</p>
                  </Link>
                  <br className="workcard11" />
                  <Link
                    to={data.git}
                    target="_blank"
                    className="workcard12"
                  >
                    <AiOutlineGithub className="workcard9" />
                    <p className="workcard10">Code</p>
                  </Link>
                </div>
              </div>
            </POPUP>
            <p className="workcard13">
              {data.title}
            </p>
          </div>
        );
      })}

    </div>
    </>
  );
};

export default WorkCard;

const POPUP = styled.div`
  position: relative;
  img {
    &:hover {
      transform: scaleX(2);
    }
  }
  .popup {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    opacity: 0;
    margin: auto;
    transition: 0.5s ease;
    background: rgba(255, 255, 255, 0.5);
    backdrop-filter: blur(5px);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
  .icon {
    color: #fff !important;
  }
  &:hover .popup {
    opacity: 1;
    color: #fff;
  }
`;