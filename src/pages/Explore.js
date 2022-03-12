import React from "react";
import style from "../style/explore.module.css";
import { DownOutlined, FireOutlined } from "@ant-design/icons";
import {Input} from "antd";
import data from "../data/explore.json";
import randy from "../images/randy.jpeg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons";
import SubHeader from "../components/SubHeader";

function Explore() {
  const { people, conversation } = data;

  return (
    <div className={style.exploreContainer}>
    <div className={style.header}>
        <SubHeader pageTitle="EXPLORE"/>
        <Input style={{
            backgroundColor: "#f2f0e4;",
            borderRadius: "0.8em",
            padding: ".3em 1em",
            border: "none",
            boxShadow: "none",
            outline: "none"
        }}
        size="large"
        placeholder="Find People and Clubs"
        prefix={<FontAwesomeIcon icon={faMagnifyingGlass} width="15px" />}
        ></Input>
    </div>
      <h6>PEOPLE TO FOLLOW</h6>
      <div className={style.peopleContainer}>
          {people.map(person => (
            <div>
                <div className="d-flex align-items-center">
                    <img src={randy} alt="user img" />
                    <div className="ml-2">
                        <h5>{person.title}</h5>
                        <p>{person.description}</p>
                    </div>
                </div>
                <button>Follow</button>
            
            </div>
          ))}
          <button className={style.showMore}>
              Show more people <span><DownOutlined /></span>
          </button>
      </div>
      <h6>FIND CONVERSATIONS ABOUT...</h6>
            <div className="row mx-0">
                {conversation.map(item => (
                    <div className="col-6 px-2 mb-3">
                        <div className={style.conversationCard}>
                            <h6>
                                <FireOutlined />
                                {item.title}
                            </h6>
                            <p>{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>
    </div>
  );
}

export default Explore;
