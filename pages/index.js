import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUP = [
  {
    id: "m1",
    title: "Pertemuan Pertama",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRApH1OVPc0cy6Zoe79SXjlnsfs7Y-Rap28Ug&usqp=CAU",
    address: "jl gunung kapur 4, 12534 Depok Kota",
    description: "ini adalah pertemuan pertama",
  },
  {
    id: "m2",
    title: "Pertemuan kedua ",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRApH1OVPc0cy6Zoe79SXjlnsfs7Y-Rap28Ug&usqp=CAU",
    address: "jl gunung kapur 4, 12534 Depok Kota",
    description: "ini adalah pertemuan ke dua",
  },
];

function HomePage() {
  return <MeetupList meetups={DUMMY_MEETUP} />;
}

export default HomePage;
