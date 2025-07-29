import { test, request, expect} from '@playwright/test';

test.describe('User Api Tests', () =>{
    const apiBaseURL = 'http://localhost:3000';

    test('Should register a new user', async() =>{
        const newUser ={
            username:'testuser',
            email:  'testuser@gmail.com',
            password: 'password123'
        }
        const reponse = await request.post(`${apiBaseURL}/register`,{
            data:newUser,
            headers: {
                ''
            }
        })
    })
    
    })