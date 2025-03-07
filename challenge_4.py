
    # Statement Exercise 4: 
    # Create the hangman's game. 
    # The user will have to guess and discover the letters of a word  
    # secret, and will have 5 attempts (one attempt per limb of the human body). 
     
    # Use your language's usual data entry method, 
    # in the case of JS, we'll use the prompt function. 
     
    # Example: 
    # gameofHangman ('victor');  
     
    #  Exit: 
    # Adivina la letra: i 
    # The word is: _i___ 
    # You have 5 tries left 

# Key points
# Do the question
# Comprobate the response with if and else
# Do loop
# save tries, bad_respond, word,ResponseOfUser
# Save Response of user for example : you need to save the letter that write the user in the response
#
def hangman(secret_word):
    guess_words = set()
    attempts = 5
    
    while attempts > 0:
        # 
        display_word = ''.join([letter if letter in guess_words else "_" for letter in secret_word])
        print(f"The word is: {display_word}")
        print(f'You have {attempts} {'tries' if attempts > 1 else 'try'}')
        #
        if '_' not in display_word:
            return print('Congratulations , you are winner')
        
        guess = input ("Guess a letter: ").lower()
        
        if guess in guess_words:
            print('You have already guessed that letter')
            continue 
        
        guess_words.add(guess)
        
        if guess not in secret_word:
            attempts -= 1
            print(f'You have failed, have {attempts} {'tries' if attempts > 1 else 'tries'}') 
        
    return print(f'GAME OVER the word was {secret_word}')
    

hangman('dog')