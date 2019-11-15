﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using TicTacToe.Checkers;

namespace TicTacToe.Pages
{
    public class CheckersModel : PageModel
    {
        public Game game;

        public void OnGet()
        {
            game = new Game();

        }
    }
}