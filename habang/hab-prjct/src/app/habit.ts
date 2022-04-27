type habstate = 'to avoid'|'to do';
export interface Habit {
    id:number;
    name:string;
    state:habstate;
    description:string;

}
export const habits =[
    {
        id :1,
        name : "smoking",
        state :'to avoid' as habstate,
        description:''
    },
    {
        id :2,
        name : "wake up early",
        state :'to do' as habstate,
        description:''
    },
    {
        id :3,
        name : "fast food",
        state :'to avoid' as habstate,
        description:'a description for a habit to avoid fast food'
    },
    {
        id :4,
        name : "work out",
        state :'to do' as habstate,
        description:''
    }
];