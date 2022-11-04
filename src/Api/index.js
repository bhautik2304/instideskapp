import { college1,college2,college3,college4 } from "../assets"
import  axios  from "axios";

const Tocken='70f1063ca2ae497bb9425a852683545b'
const Apiurl='https://gocoolgroup.com/api/'

const branch=`https://gocoolgroup.com/api/branch.php?token=${Tocken}`


export const Colleges= [
    {
        id:'1',
        name: 'Duhram College',
        img: college1,
        address: 'Whitby, ON, Canada',
        country:'Canda',
        collegedesc:'Durham College is situated on the traditional lands of the First Peoples of the Mississaugas of Scugog Island First Nation. These lands are covered under the Williams Treaties and rest within the traditional territory of the Anishinaabeg. We offer our gratitude to the Indigenous Peoples who care for and, through the treaty process, share the lands on which we live, learn, teach and prosper today.',
        campus:[
            {
                campusname:'OSHAWA CAMPUS',
                line:['2000 Simcoe St. N.','Oshawa, ON, Canada L1G 0C5']
            },
            {
                campusname:'WHITBY CAMPUS',
                line:['1610 Champlain Avenue','Whitby, ON, Canada L1N 6A7']
            }
        ],
        contactinfo:{
            website:'durhamcollege.ca',
            mobile:'905.721.2000',
            mail:' dccares@durhamcollege.ca',
            map:'map.durhamcollege.ca/'
        },
    },
      {
        id:'2',
        name: 'Conestoga College',
        address: 'Ontario, Canada',
        img: college2,
        country:'Canda',
        collegedesc:'Discover the various services Conestoga has to offer to enhance your college journey. From academic and learning support to student support and services, how to get involved in college life as well as career and employment help — Conestoga has the tools and resources to support your college experience.',
        campus:[
            {
                campusname:'OSHAWA CAMPUS',
                line:['2000 Simcoe St. N.','Oshawa, ON, Canada L1G 0C5']
            },
            {
                campusname:'WHITBY CAMPUS',
                line:['1610 Champlain Avenue','Whitby, ON, Canada L1N 6A7']
            }
        ],
        contactinfo:{
            website:'www.conestogac.on.ca',
            mobile:'905.721.2000',
            mail:'dccares@durhamcollege.ca',
            map:'conestogac.on.ca/about/campuses'
        },
      },
      {
        id:'3',
        name: 'Uni. Of Waterloo',
        address: 'Ontario, Canada',
        img: college3,
        country:'Canda',
        collegedesc:'The University of Waterloo acknowledges that much of our work takes place on the traditional territory of the Neutral, Anishinaabeg and Haudenosaunee peoples. Our main campus is situated on the Haldimand Tract, the land granted to the Six Nations that includes six miles on each side of the Grand River. Our active work toward reconciliation takes place across our campuses through research, learning, teaching, and community building, and is centralized within our Office of Indigenous Relations.',
        campus:[
            {
                campusname:'University of Waterloo',
                line:['200 University Avenue West','Waterloo, ON,Canada  N2L 3G1']
            },
        ],
        contactinfo:{
            website:'uwaterloo.ca',
            mobile:'+1 519 888 4567',
            // mail:' dccares@durhamcollege.ca',
            map:'https://uwaterloo.ca/map/'
        },
      },
      {
        id:'4',
        name: 'Canadore College',
        address: 'Ontario, Canada',
        img: college4,
        country:'Canda',
        collegedesc:'Durham College is situated on the traditional lands of the First Peoples of the Mississaugas of Scugog Island First Nation. These lands are covered under the Williams Treaties and rest within the traditional territory of the Anishinaabeg. We offer our gratitude to the Indigenous Peoples who care for and, through the treaty process, share the lands on which we live, learn, teach and prosper today.',
        campus:[
            {
                campusname:'OSHAWA CAMPUS',
                line:['2000 Simcoe St. N.','Oshawa, ON, Canada L1G 0C5']
            },
            {
                campusname:'WHITBY CAMPUS',
                line:['1610 Champlain Avenue','Whitby, ON, Canada L1N 6A7']
            }
        ],
        contactinfo:{
            website:'durhamcollege.ca',
            mobile:'705.474.7600',
            mail:'info@canadorecollege.ca',
            map:'https://www.canadorecollege.ca/about/locations'
        },
      }
]

export {

}