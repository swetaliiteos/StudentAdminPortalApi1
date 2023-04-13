﻿using Microsoft.VisualBasic;

namespace StudentAdminPortalAPI.Datamodels
{
    public class student
    {

        public Guid Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
      public DateTime DateOfBirth { get; set; }
        public string Email { get; set; }
        public long Mobile { get; set; }
        public string ProfileImageUrl { get; set; }
        public Guid GenderId { get; set; }
        // Navigation Properties
        public Gender Gender { get; set; }
        public Address Address { get; set; }

        internal static void ToList()
        {
            throw new NotImplementedException();
        }
    }
}
