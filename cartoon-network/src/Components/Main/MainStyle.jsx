import styled from "styled-components";

export const Scroller =styled.div`
max-width: 80%;
max-height: 35vh;
outline: 3px solid red;
margin: auto;
overflow:hidden;



.scroller_inner{
padding-block: 2rem;
display:flex;
gap: 1rem;

    .scroller[data-animated="true"]{
    overflow:hidden;

    -webkit-mask: linear-gradient(90deg, transparent, white 20%, white 80%, transparent);
    mask: linear-gradient(90deg, transparent, white 20%, white 80%, transparent);
};

.scroller[data-animated="true"] .scroller_inner{
    width: max-content;
    flex-wrap: nowrap;
    animation: scroll var(--_animation-duration, 40s) var(--_animation-duration, forwards) linear infinite ;
};

.scroller[data-direction=right]{
    --_animation-direction: reverse;
};

};


@keyframes scroll{
    to{
        transform: translate(calc(-50% - 0.5rem));
    }
};
`;

export const Ul = styled.ul`
list-style: none;
display: flex;
justify-content:center;
align-items: center;
`;