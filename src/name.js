import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Name = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const { name } = useParams();
  useEffect(() => {
    axios
      .get(`https://whispering-forest-38899.herokuapp.com/${name}`)
      .then((res) => {
        if (res.data.user) {
          setData(`${res?.data?.user?.name ?? ""}`);
          //alert(`${res.data.user.name} is available`);
        } else {
          //alert(`${name} is not available`)
          setData(null);
        }

        setLoading(true);
      });
  });

  const handleClick = () => {
    let toSend = `https://firebasedynamiclinks.googleapis.com/v1/shortLinks?key=AIzaSyCB7sNecI_wNNBwL39kQgXRU87jPuni13Q`;
    axios
      .post(toSend, {
        dynamicLinkInfo: {
          domainUriPrefix: `https://upworktest2.page.link`,
          link: `https://whispering-forest-38899.herokuapp.com/${data}`,
          androidInfo: {
            androidPackageName: `com.finalone`,
            androidFallbackLink: `https://play.google.com/store/apps/details?id=com.instagram.android`,
          },
          //longDynamicLink: `https://upworktest2.page.link/?link=https://whispering-forest-38899.herokuapp.com/${data}&apn=com.finalone`,
        },
      })
      .then((res) => {
        alert(
          `Successfully shared. Your dynamic link is : ${res.data.shortLink}`
        );
      })
      .catch((err) => {
        alert(err);
      });
  };

  return (
    <div>
      {loading
        ? data
          ? `This page is for ${data}`
          : "Not Available"
        : "Loading . . ."}

      <br></br>
      {data && <button onClick={handleClick}>Share</button>}
    </div>
  );
};

export default Name;
