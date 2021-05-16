export const sendMessageActionCreator = () => ({type: SEND_MESSAGE})
export const updateMessageTextActionCreator = (text) => ({type: UPDATE_MESSAGE_TEXT, newText: text})

const SEND_MESSAGE = 'SEND_MESSAGE'
const UPDATE_MESSAGE_TEXT = 'UPDATE_MESSAGE_TEXT'

let initialState = {
    dialogs: [
        {id: 1, name: 'Kastiel'},
        {id: 2, name: 'Sam'},
        {id: 3, name: 'Din'},
    ],
    messages: [
        {
            id: 1,
            message: 'Hello',
            avatar: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUUExMWFhUXGR0XGBUXGB4bGxgbHxcaHRoYHhgYISggGhonGx8YIjEiJSkrLi4uHh8zODMtNygtLjABCgoKDg0OGxAQGy8lICUrLS0tLTUwLy0tLS0vLS0tLS0tLS0tLS0tNS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAJYAlgMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAAFAAMEBgcCAf/EAEEQAAECAwUEBwQIBQQDAAAAAAECEQADIQQFMUHwBhJRYSJxgZGhsdETUsHhFRYyQlNUkvEHI0Oi0hQXgpMzYmP/xAAZAQADAQEBAAAAAAAAAAAAAAACAwQBAAX/xAAkEQACAgICAgMBAAMAAAAAAAAAAQIRAyESMUFRBBNhIhSB8P/aAAwDAQACEQMRAD8AuatpbecLGgdc0emvJpW0F5/lpI65ny15ZpY9o79noEyVISUKDhW6kAjj0lCFab2v9CStctKUpDqUfZhgKk/a12Qz7sd1r/v9ivrl7NI+nrz/AAJP6vlHC7/vKm/Kk7uNJwSeVd3i3jGKTP4jW8/1E9iBDP19tmSpf/Wn4iCc4+juDNwtF/3mjdcWUhX2Sma7tj90QyraW8/cs56if8YxhH8QrePszUjqloHkmPf9xbw/H/sT6RjyL0coPyzZBtFeh+5J8fPd5ayX0/e2Qkdr+kYz/uDb/wAb+0ekcq2/t5/rf2j0jvsVdG/X+m0fT17f/DuPpHqb8vU5yO75a8sR+u9t/GPdHn11tv4x7o37F6NUGvJuYve9eMnu+UdC97096R3fKMLO21u/GPcPSOTtpbvzCu4ekZ9i9HcP03Y3reoAO/IPLdNO1qw2b6vXjI/SYwv65W78yvw9IR2yt35hfh6R3NNVR3A3T6avXjI/QYcF83pT/wAI49A1jBvrjbvzMzv+Ue/XK3/mZnh6QKkk+jHBs3kXzefGT+kx19N3nwk9e6fKkYJ9c7f+ZmeHpC+ulv8AzMzw9ILmvRn1v2byq/7xGJk/9avWPIwc7aW/8yvw9IUdzj6O4M2rY1LWGzU/pI8Ugxnf8WtoUTFizS6+zLrUDTe9xmxFH7sjAzanaCehEqzy5+6hEtAKEOlSSEAMpYqTyo3CkU2IceH+uTGtbEYUKFFJwoUSrNYFrbdGMG7Hs2qhVqsBLJGPY2GGUuiuJQTHqpZGIi7ybhSMBXi2EejZx6sQPMcYV/kRH/4joopEeRYp9zKmLKZQ6IxUdYREt+z86WN7dcZsPhDVkQmWGS2iVcd0WeepCTNWFkVSAzHkSKxd0/wxspD+0n96f8euM82bvASLQhZDpdiO3EPSnrG8JUG16a8k/Im41RK+Sl+GZX9sLIkgFEyaX95vgBAT6uy/eV4Ro21wdApnrqioKEdiySlEzm7A6tnUe+ruEey9npeal9wgxDksB4vUU0dyYHOzcr319wjlWzUvKar9Ig+d3hHJCeDdkbxR3JgBezCR/UPdCg2oHItHkZxQSbZQ58zeUVcS8cQbVdiQSN3A8THlrsMtCd7dPedcYH6pB2mBQIMXLdJmK6QoK9ccXbZStQZAaLjdkgI6IFczw54RNkm0tD8UFdsm3ZdCUsAkYdXfr5FhYh1Di3gNfJyy2YtUOGDNnzNKa7Cdmsrh1HsyGtcoWmXc0iJZrrfKnD4k69J30SN0uKYa18psqWgc9eESESgcoKMPIueZsDTLDLSQhKQKVMQr0u3dSS4A50B8NeUy8pSgpTA0DtAOZdlpXNTM3wENVJS56hw64LjboFTcVaKdeuzQmAzJAqT9liAepxry0DZi9/bShvDdnS2TNQqlclhxgpn5RMk3MCM34618OJ9xJ3kzG6SDQ1zoQeIjptuNMTlxxltdg/apyh2euAzw1qlVJ/8AXXdrys99lkgEZ/Lhpu4ChAJphnDcEbi6POu3RGCC/oIcSnChiTMkAMePdrXU7KmdICjeMX4loDlukRRKfAGO/ZMPs1gohI1rXl6UjjruhvEB5d6AgkKP3TCg3uiFHcQ/v/DPrXa1oJI+zkPh3wPtNv8AaBiI4ts5zQ0iMzCFSk7opig1dhIT0WPpFuumQGrUk15tgNftRrtTm7RZ7vta0M43kxHkRVAvFnmJlJcqPVxPAa+Xv0ipZdcsAD7PU+LZQJsUxExaeQdufHX7WOy2dBU6qt4wpKteQnvsizLxcdGp7vhDl325YJL9kPXsuU4QndK8gSw6nGdI8SjoJDB824xjTXZkZLpBOy2wLLHGJCpIz74raVMr4618LDItPRFKwEJX2FJUOkAYAQ2tJOWta4RLZPWFoASNwhW9103fjE2zrJSN6CrloxdAa/rn9sjosFguObZHh1xRiFJUUqBSQagxqigPnFf2muYLHtEJ/mJH6xw6xlpmQm8ehGSCe12UycpRDRxIfeD+UPS1irjsIPprySEbyujj3eevhZF1sikthKEI4lJweOzLzikmkqFChM0KCQJk5MdrllnILYYQW2ouc2e0FIHQLKQeWGfBoj76lYMRm/GJIVJWeommR7MHYV5QdsS1OEAEk8oGKtO6qiQCMzBzZ6ahJJxUpnJ8sKDXUM46GKRYbFZCnKqgz8fTXZJnzZyW3MeAHypEmyqCmOJw8eqCsmzDEYmJajdjVIrd33SoTROWHmVamfHri3SZB3Q8SbPZQeuHZkpoGcjE0CLVICFOxI4cYDJ2hnomECyzCMKgN2HXpcbXYEzEseGIgcqxJlhqnnGJV40NUlWzmx2mbMAXNliWKsnecnrbDXY8tcwmhpHFkG9TER2tZHRSAVc8OslqRt+hY77QjFWPefDXlISoKDNEBUkJBJqSWKuPZkI9VPYRnmjOIKtl3J9oqmJ11R4LpQ4JSIlTlOrsiWlPRwhkJaJct3RHTdaSIYTYEbzFNeTsdcIKyJgNNeUcqRUHhTsh/OVVYjiuyKLEj3O0QonmW0KA+yfs7ivRVtpri/1UhgHmS3Uk4b1Kpdm+YjOJ9jKHBDF23TQgjI8Drq172ns5alzTuhIcgF3DUGFCTSMvvtZmLUskOpRJI48OwU7I74jfR2OTqiuWjHrgtdTpNcWfty6tdjEqxgmrsBBKzSwfsg0A1yh8km6ZVWrLdc9p6IfjUszmnLXkdlW2jCKNZraqWAClwcGHjwgxZbYFMQKYfvrLukyY2mHF32XGz2mJQnOaxXbPaqDPKJqLQ7QukuxocE6IF4T6VzhpE9s8Y8mB+cE/wE5kTmoiqjmcBxiXKZCHI49ZL4wLWgD1h2TNBLwty4oJq0SBOKi5wyER5imfPgY7KnOta7vSnlHP2DdEFB6bHGlRg2tcCycIDWhaRMSM9a1QxKwEHBEeaX9WMoLK16RKJiPMlVeO1KZoNOhXJCTMLQohJWQpQLUJbqyhQNgtszld8TVS91alLRiyjmAa4QLRaHDijHWUN2uYUqWkjBShwwURDdmS2YrWlf2MeglGL0UqGtCmT2PEVBZ6gnqiw3RM/lkUFMcH5d0VqeSHHjrKJVitPR6WDMIXkjbGQlosVmsyhSu7gf2jpSFS8sc/lDMi8ARw6w1IdtFuQcq8eqMSZlolWK2tiCwz461yMSJ4YEF31mNeVMkzFIW1elyp5U12EUWk4MddkKlj9DFItybSAHOFIfFqFHUK4RTU2lQxBNcfj2R1/riQQQCcGGHLEch3RnB0Y5a0WW0T67ufLhxwgD9K1Ul8MOfhFev3aBYeWkl/vKHBsBACTa1DMwLxNo3HJrs2G5LUFh89ZZRH2iv4SUsASr96mlA8ZnLnzjh0eeDfKLfbLvTLsrJ3iuZLdalFyXD8KNwhmD4rm6T0LzZVFr9Otl7Yqe81fHDtbhy1loFmFBGZbAy2Aoakh+o+GuzT5CaQqUWmT5XuhTUUwiNMwwicRDC5cYKBdqB9q7kApFGzwPkIUdXokslmx4QoFo6zK7+lH20xL9FM2YkD/mavEKRJIL0YUHHwiybR2ZItU+jfzFsQKOat84Cz0Ny4ho9Djstg+iHbEBsokWIIKQGriDoa8mLWKN2iOrFINC2fU8d5QVWmEkzahgOsjCJC1BblbghPR3RRRHH3YZkIIFQ2uUOKSYYIfYdt1kSlCFJo4D5jDH5RDSsZV56wg3Js7oCQiiwFFT03mGI9P2CWmzezJ3qP2+PCAnB+DoS3tnE8dFwa5EREvC3iXLqOkzBxmYeXM3QAO+AdvXLUpQU5ZJ3SPfcZNUQocB1ly/ExNk2QksRTHBtCJdzzFSySgjeUgocjAHHKJlmspLUNei4wYZdkca3RLsVzrUtMspIfd3nDMnHyixbSS3SU4hmwy7uWsn7msJBKzUnN4m26zucOyPQ+NjUFfs835Ge5L8Aew9m3ZdXfeVQ4cQRSkX+zjowCueyhILBny555a8jspbUjyMmsjGN27Hkh45mIh1EczhHMHwQLTLdIbjCh4GlNYwoBpnVZnO2CiLVNSH6Snzq48ory0HGjOzPUEcshFn23DWpWXRT8Yqk6c28KVrhXv4Re2XQQza0kACjl9coiFW4Qyno9HYHgx4R1NmB6d8Nos+ZBbI5P1wPkZQSnW4hgDvYP18BHgtKsThyOOtcoEuT4RIlSQcRxEMTYmaSL1Zry3JMveYrKQoAD7u7R3wOT6EO021M1LEMVOUipDZA8+r9h9jG+lx91Ir2MPKOpiFboZnThlFGmkSJU2c2+wkAbr4VzrybKA0yxkMwL8xEyVUnpFJrUV6sNfDucQyt3eYNjWublqVeFvDy6KFka7JF2XepaQA3RcsS1Wd345RYLFZUJSMeNeeOHOKzZJhYEFXPhjxbHXUUsK1KI8f316MhgSpick27stlntIYMNd2vLudMBrSBllwEPmWYqilR501sbtV8iTrTROunaqTMoronnR4q20Nmo7tx5cDACwSN5Ro4wHf6x5vyMMeTZbiSas22UoEOkuOUOkhmaMykXpPlEFJpjunAxY7u2rUR/Ml9qc+wikSuGrQZZJaeTQoCW3aGWQN1Csc3HHhHkAox8gcqKh/EgtahzSPMxVJqSCcKEphQoqPSx9EWchh2+scTCQMaPg/wwyjyFGMORyZ5+UP2eeS+EKFB43/VCZEqw2sjebIVrBuzzAoOXbgGeg+UKFFUNolypIaTLAJDZ8YgTKJVzPHnwhQofjSpgJj1lUpKUp+6S7c2x7hFlu6RmfCFCjYsDN0F5CGcNDsw0whQoJIikwHtDKdBiBs5Zxuq3g7U8dawUKJvkrRZgf8hi1WQYcogoO6RQEAnPr5ctZKFHjx6Gk6VLBFHeFChRq2ZR/9k=",
            className: 'input'
        },
        {
            id: 2,
            message: 'How are you?',
            avatar: "data:image/jpeg;base64,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",
            className: "input"
        },
        {
            id: 3,
            message: 'Good day',
            avatar: 'https://ava-24.com/_ph/146/479768406.jpg',
            className: 'output'
        },
        {
            id: 4,
            message: 'Yo',
            avatar: 'https://ava-24.com/_ph/146/479768406.jpg',
            className: 'output'
        }
    ],
    newMessageText: ''
}

const dialogReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE : {
            let newMessage = {
                id: 5,
                message: state.newMessageText,
                avatar: "https://ava-24.com/_ph/146/479768406.jpg",
                className: 'output'
            }
            return {
                ...state,
                newMessageText: "",
                messages: [...state.messages,newMessage]
            }
        }


        case UPDATE_MESSAGE_TEXT : {
            return {...state,
                newMessageText: action.newText}
        }

        default:
            return state

    }

}
export default dialogReducer