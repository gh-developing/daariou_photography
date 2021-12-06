using System;
using System;
using System.Security.Cryptography;
using System.Text;


namespace daariiou_photography_backend.Helper
{
    public class PasswordHelper
    {
        /// <summary>
        /// Gets the hash string.
        /// Creates the password hash with Salt of choice.
        /// </summary>
        /// <param name="password">The password.</param>
        /// <returns></returns>
        public string CreatePasswordHash(string password)
        {
            StringBuilder sb = new StringBuilder();
            foreach (byte b in GetHash(password))
                sb.Append(b.ToString("X2"));
            string hashedPW = sb.ToString();
            return hashedPW;
        }

        /// <summary>
        /// Gets the hash.
        /// </summary>
        /// <param name="password">The password.</param>
        /// <returns></returns>
        private byte[] GetHash(string password)
        {
            SHA384 sha = new SHA384CryptoServiceProvider();
            return sha.ComputeHash(Encoding.UTF8.GetBytes(password));
        }
    }

}
